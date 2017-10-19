---
layout: page
title: "Q124877: PRB: Error 6 RPC_S_PROTSEQ_NOT_SUPPORTED in 16-bit Application"
permalink: /kb/124/Q124877/
---

## Q124877: PRB: Error 6 RPC_S_PROTSEQ_NOT_SUPPORTED in 16-bit Application

	Article: Q124877
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kb16bitonly kbAPI kbRPC kbSDKPlatform kbOSWin310 kbGrpDSNet
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to run a 16-bit RPC application, the RpcBindingFromStringBinding()
	may return error number 6. In the RPCERR.H file, this is defined as:
	
	     RPC_S_PROTSEQ_NOT_SUPPORTED
	
	CAUSE
	=====
	
	Unlike Windows NT, the 16-bit environments do not automatically install the RPC
	runtime files and drivers. If the driver for the protocol sequence your are
	using is not installed, or is not in your path, RpcBindingFromStringBinding()
	will fail with error code 6.
	
	RESOLUTION
	==========
	
	The 16-bit RPC runtimes and drivers ship with the Win32 SDK. You can install
	them from the CD by going to the \mstools\rpc_dos\disk1 directory on the CD and
	running setup. By default, the installation should install all drivers. If you
	want to verify that, choose the custom install option.
	
	After the drivers are installed, you will need to make sure that they are in your
	path before attempting to run a 16-bit RPC application.
	
	NOTE: You must install the 16-bit drivers even if you are running your 16-bit
	application on a Windows NT host.
	
	MORE INFORMATION
	================
	
	Windows drivers have the extension .DLL and DOS drivers have the extension .RPC.
	The driver names and the protocol sequence they support are as follows:
	
	  rpc16c1    - Named Pipes
	  rpc16c3    - TCP/IP
	  rpc16dg3   - UDP/IP
	  rpc16c4    - DEC Net
	  rpc16c5    - NetBIOS
	  rpc16c6    - SPX
	  rpc16dg6   - IPX
	
	REFERENCES
	==========
	
	The "Installing RPC" section of the RPC Programmer's Reference.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kb16bitonly kbAPI kbRPC kbSDKPlatform kbOSWin310 kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
