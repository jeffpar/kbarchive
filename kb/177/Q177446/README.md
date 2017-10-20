---
layout: page
title: "Q177446: How to Test Microsoft Remote Procedure Call Performance"
permalink: /kb/177/Q177446/
---

## Q177446: How to Test Microsoft Remote Procedure Call Performance

{% raw %}

	Article: Q177446
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbRPC kbSDKPlatform kbhowto kbGrpDSNet
	Last Modified: 05-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to test Microsoft Remote Procedure Call (RPC)
	performance, and how to troubleshoot RPC error messages.
	
	MORE INFORMATION
	================
	
	RPC is compatible with the Open Software Foundation (OSF) design and
	interoperable with other Data Communications Exchange (DCE) standards. RPCs are
	industry standard Interprocess Communication (IPC) mechanisms for client-server
	communications that are network independent and can work over a variety of
	network protocols. RPC uses IPC mechanisms to establish communications between
	the client and server to call program functions on a remote computer. The
	complex programs that use this level of service require that there be a
	connection, or level of throughput, to adequately deliver this functionality.
	For example, when you are using Microsoft Exchange Server, a connection is
	needed to reliably maintain the flow of data.
	
	RPC Error Messages
	------------------
	
	When you use RPC, you may receive any of the following error messages, which may
	or may not be caused by slow network connectivity:
	
	- The RPC protocol sequence is not supported.
	
	- The RPC protocol sequence is invalid.
	
	- The RPC server is already listening.
	
	- The RPC server is not listening.
	
	- The RPC server is unavailable.
	
	- The RPC server is too busy to complete this operation.
	
	- A remote procedure call (RPC) protocol error occurred.
	
	- The transfer syntax is not supported by the RPC server.
	
	- The RPC protocol sequence was not found.
	
	- An internal error occurred in a remote procedure call (RPC).
	
	- The RPC server attempted an integer division by zero.
	
	- An addressing error occurred in the RPC server.
	
	- A floating-point operation at the RPC server caused a division by zero.
	
	- A floating-point underflow occurred at the RPC server.
	
	- A floating-point overflow occurred at the RPC server.
	
	- The list of RPC servers available for the binding of auto handles has been
	  exhausted.
	
	- The error specified is not a valid Windows RPC error code.
	
	- Incompatible version of the RPC stub.
	
	- The RPC pipe object is invalid or corrupted.
	
	- An invalid operation was attempted on an RPC pipe object.
	
	- Unsupported RPC pipe version.
	
	- Invalid asynchronous RPC call handle for this operation.
	
	- The RPC pipe object has already been closed.
	
	- The RPC call completed before all pipes were processed.
	
	- No more data is available from the RPC pipe.
	
	Troubleshooting RPC Performance and Error Messages
	--------------------------------------------------
	
	There are many tools you can use to determine if an RPC error message is being
	caused by a slow network connection. If you receive an RPC error message,
	eliminate slow network connectivity as the possible cause. Use one or more of
	the following methods to isolate the problem.
	
	- To resolve the problem of name resolution as a cause of the RPC error
	  message, verify that you can use the NET VIEW command at a command prompt on
	  the destination server. If Transmission Control Protocol/Internet Protocol
	  (TCP/IP) is the protocol used between the client and server programs, you can
	  use an Lmhosts file to eliminate Windows Internet Naming Service (WINS) as a
	  possible contributor to the problem.
	
	- You can test basic RPC connectivity by using another RPC program. Windows NT
	  Server includes several RPC programs. Event Viewer (Eventvwr.exe) and
	  Registry Editor (Regedt32.exe) can have their focus set to any computer
	  running Windows NT. Other programs such as User Manager (Usrmgr.exe) and
	  Server Manager (Srvmgr.exe) set their focus on the Primary Domain Controller
	  (PDC) by default. Use one of these programs as another test for RPC
	  connectivity.
	
	- To test network connectivity, monitor the speed of a basic file copy across
	  the network using Performance Monitor (Perfmon.exe). To give the test an
	  adequate sampling time and to fully allow for segmenting and sequencing, only
	  test with a file that is at least 2 megabytes (MB) in size. To copy a file
	  across the network using Performance Monitor:
	
	  1. Locate a 2 MB or larger file. If you do not have a 2 MB file readily
	     available, you can use the COPY command to create the file from an
	     existing file. To do so, type the following command at a command prompt,
	     and then press ENTER:
	
	  "copy /b file.ext + file.ext + file.ext + file.ext destination.ext" (without
	  the quotation marks)
	
	     NOTE: Use the binary (/b) switch when the source file is not text. This
	     prevents CTRL+Z being read as an end-of-file character.
	
	  2. Start Performance Monitor on the client computer. Since Performance
	     Monitor cannot distinguish between connections to different computers for
	     a file copy, you may want to disconnect all current network connections if
	     other connections may influence the results. To disconnect all current
	     network connections, type "net use * /d" (without the quotation marks) at
	     a command prompt, and then press ENTER.
	
	  3. Performance Monitor can monitor a file copy for the server or redirector
	     object using the Bytes Transmitted/sec, Bytes Received/sec and Bytes
	     Total/sec counters. To simplify the procedure, and to more accurately
	     represent the flow of data in the RPC connection, copy a file from the
	     server computer to the client computer that is running the RPC program. A
	     2-MB file needs to be located on the server computer.
	
	  4. In Performance Monitor on the client computer, follow these steps:
	
	     a. On the Edit menu, click Add To Chart.
	
	     b. In the Object box, click Redirector.
	
	     c. In the Counter box, click Bytes Received/sec, and then clickAdd.
	
	  5. At a command prompt, map a network drive letter to the server computer and
	     then copy the file from the server computer to the client computer.
	
	  6. In Performance Monitor, observe the average, maximum, and minimum values.
	     If you are testing with a 128-Kbps link, observe the average counter to
	     verify that the copy process is running close to 75 percent of the 16,384
	     bytes per second theoretical limit (.75 x 16,384 = 12,288 bytes per
	     second). This value should be higher for important functionality and may
	     indicate the need for network expansion. As a gauge, measurements that
	     approach 800,000 bytes per second (bps) are excellent. The following table
	     lists conversions for kilobits per second (kpbs) and Kilobytes per second
	     (KBps):
	
	     +--------------------------------------------+
	     | Connection speed  | Bytes per second (bps) | 
	     +--------------------------------------------+
	     | 128kbps           | 16,384                 | 
	     +--------------------------------------------+
	     | 512kbps           | 65,536                 | 
	     +--------------------------------------------+
	     | 1.544Mbps (T1)    | 193,000                | 
	     +--------------------------------------------+
	     | 10Mbps (Ethernet) | 1,250,000              | 
	     +--------------------------------------------+
	     | 46.320Mbps (T3)   | 5,790,000              | 
	     +--------------------------------------------+
	
	     With a certain line speed, such as 128K, you see less than the full 16,384
	     bps throughput based on utilization and other factors. These numbers are a
	     theoretical maximum, and network overhead reduces them.
	
	  7. To further eliminate general network connectivity as the problem:
	
	     a. In Performance Manager on the client computer, click Add To Chart on
	        the Edit menu.
	
	     b. In the Object box, click Redirector.
	
	     c. In the Counter box, click Bytes Transmitted/sec, and then click Add.
	
	     d. Copy the file back to the server computer, and monitor the rate at
	        which the file is copied.
	
	  NOTE: Be certain that these tests between the client computer and server
	  computer are acceptable for the level of service desired. To perform
	  additional tests using Performance Monitor, by reverse the direction of data
	  flow between the client and server computer, select the appropriate counters.
	
	- Another way to test RPC communication between two computers is to use the
	  Rpcping tool.
	
	For additional information about how to use the Rpcping tool, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q167260 How to Use RPCPing to Test RPC Communication
	
	- Other causes of RPC error messages may be third-party services or larger
	  services running on the client or server computer. To determine if running
	  services are causing the problem, stop all non-default services and test RPC
	  performance using Event Viewer and Performance Monitor again.
	
	- Check the state of the RPC services on the client and server computer. To do
	  so, type "net start" (without the quotation marks) at a command prompt, and
	  then press ENTER. For a domain controller, the following information is
	  displayed:
	
	  Remote Procedure Call (RPC) Locator
	  Remote Procedure Call (RPC) Service
	
	- To further check the state of these services, use the Sc.exe tool included
	  with the Microsoft Windows NT Resource Kit.
	
	For additional information about using the Sc.exe tool, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q166819 Using Sc.exe and Netsvc.exe to Control Services Remotely
	
	- Services.exe contains much of the RPC code, and one of its threads may be in
	  a hung state. Use the Dr. Watson tool (Drwtsn32.exe) to determine if an error
	  message has been reported. Even if no error message has been reported, one of
	  its threads may be hung. If this is the case, you may need to restart your
	  computer.
	
	- You can use the Tlist.exe tool included with the Windows NT Resource Kit to
	  obtain information similar to the following:
	
	     62 Win32StartAddr:0x022a3ca1 LastErr:0x000003e5 State:Waiting
	     64 Win32StartAddr:0x022a4895 LastErr:0x00000000 State:Waiting
	     67 Win32StartAddr:0x76e03f90 LastErr:0x00000000 State:Waiting
	     4.0.1381.4 shp  0x02290000  services.exe
	     4.0.1381.4 shp  0x77f60000  ntdll.dll
	     4.0.1381.4 shp  0x77e10000  RPCRT4.dll
	
	  Examination of the state, files, and dates may provide additional information.
	
	- You can use the Pmon.exe tool (included with the Windows NT Resource Kit)
	  Task Manager to obtain information about Services.exe, such as memory and CPU
	  consumption.
	
	- The Pstat.exe tool, included with the Windows NT Resource Kit, displays
	  thread states for Services.exe.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool kbRPC kbSDKPlatform kbhowto kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
