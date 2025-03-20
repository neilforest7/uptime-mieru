import { NextResponse } from "next/server";
import { getGlobalConfig } from "@/services/config";

export async function GET() {
  try {
    const data = await getGlobalConfig();
    return NextResponse.json(
      data,
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=60',
        },
      }
    );
  } catch (error) {
    console.error("Next.js Edge Function 获取 Uptime Kuma 配置数据错误:", error);
    return NextResponse.json(
      { error: "获取 Uptime Kuma 配置数据失败" },
      { status: 500 }
    );
  }
} 