---
layout: page
title: "Q151429: Err Msg: Can't Run 16-Bit Windows Program"
permalink: /kb/151/Q151429/
---

## Q151429: Err Msg: Can't Run 16-Bit Windows Program

{% raw %}

	Article: Q151429
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT workstation connects to a Windows NT server running McAfee's
	Netshield for Windows NT, the following error occurs when you try to execute
	applications off the server sharepoint:
	
	  Can't run 16-bit windows program
	  Access to the specified device, path, or file is denied.
	
	After clicking OK on that error message, the Windows NT workstation appears to
	freeze for up to 5 minutes. After that time, another error message appears:
	
	  Insufficient memory to run this application.
	  Please close one or more applications and try again.
	
	Any attempt to run the same application located on the Windows NT server from the
	Windows NT workstation will produce the second error above.
	
	WORKAROUND
	==========
	
	McAfee has confirmed this to be a problem in their product. Either of the
	following two workarounds can be used to pending a new release of McAfee's
	Netshield for NT:
	
	- Disable the following option in McAfee Netshield for Windows NT:
	
	  Outbound Scanning -or-
	
	- Uninstall the McAfee Netshield for Windows NT application from the Windows NT
	  server. To uninstall, perform the following steps in the following order:
	
	  1. Stop both of Netshield's services on the Windows NT Server:
	
	     MACAFEE TASK MANAGER
	     MACAFEE ALERT MANAGER
	
	  2. Use the Services tool in Control Panel to set these two services (McAfee
	     Task Manager and Alert mananger)to start up manually.
	
	  3. Restart the server.
	
	  4. Run the McAfee Netshield uninstall program.
	
	If Netshield did not uninstall properly, then the uninstall program may not
	function properly. Check the registry to make sure the uninstall program removed
	the McAfee software key under:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MCAFEE
	
	
	Netshield for Windows NT is manufactured by McAfee & Associates, Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise, for
	this product's performance or reliability.
	
	Additional query words: virus hold launch fails
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
