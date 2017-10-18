---
layout: page
title: "Q252408: Unable to Shut Down the W3SVC Service Properly"
permalink: kb/252/Q252408/
---

## Q252408: Unable to Shut Down the W3SVC Service Properly

	Article: Q252408
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to stop the W3SVC service using the Services in the Control Panel,
	the following error message occurs:
	
	  The World Wide Web Publishing Service service could not be stopped
	
	You may also see this error if you attempt to use the command line command "net
	stop w3svc" (without the quotation marks):
	
	  Error 2186: The service is not responding to the control function
	
	In the task list, you can see that the Inetinfo.exe process still exists. You
	cannot restart W3SVC without stopping the InetInfo.exe process first.
	
	CAUSE
	=====
	
	When shutting down, the W3SVC service first tries to close all existing TCP/IP
	client sessions. For each pending connection, the W3SVC shutdown code waits
	until the "active" user requests are finished. When all TCP/IP sessions have
	been closed, W3SVC can then shut down all running ISAPI applications.
	
	If a Web client has a file download in progress and does not read the entire
	server response, then the TCP connection cannot be closed quickly and the W3SVC
	cannot shut down in the timeframe registered with the Windows NT Service Control
	Manager (SCM). This time is 120 seconds by default. The Windows NT SCM then
	displays the error message.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version       Size    File name     Platform
	  -------------------------------------------------------------
	  01/21/00  22:20   4.2.0738      185,760 Infocomm.dll  x86
	  01/21/00  22:19   4.2.0738       47,936 Isatq.dll     x86
	  01/21/00  22:21   4.2.0738       38,256 Ssinc.dll     x86
	  01/21/00  22:21   4.2.0738       25,360 Sspifilt.dll  x86
	  01/21/00  22:20   4.2.0738      228,480 W3svc.dll     x86
	  01/21/00  22:20   4.2.0738       87,520 Wam.dll       x86
	  01/21/00  22:20   4.2.0738      304,400 Infocomm.dll  alpha
	  01/21/00  22:19   4.2.0738       82,704 Isatq.dll     alpha
	  01/21/00  22:21   4.2.0738       60,176 Ssinc.dll     alpha
	  01/21/00  22:21   4.2.0738       39,696 Sspifilt.dll  alpha
	  01/21/00  22:21   4.2.0738      383,760 W3svc.dll     alpha
	  01/21/00  22:20   4.2.0738      150,288 Wam.dll       alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	The fix forces the closure of the TCP/IP sockets when the W3SVC service is
	ending. However, because IIS 4.0 allows an ISAPI application to process a
	request on an arbitrary thread, there is no way to notify these threads to shut
	down. The new registry parameter "mSecWAMTimeoutLoop" has been added to allow
	these threads to finish their work properly. The parameter below must be
	manually added to the following registry key:
	
	  
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W3svc\Parameters
	  Value name    : mSecWAMTimeoutLoop (ms)
	  Value type    : REG_DWORD
	  Default value : 200 ms
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	If some ISAPI requests are still executing, WAM shutdown will wait a maximum of
	10*mSecWAMTimeoutLoop milliseconds before shutting down.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
