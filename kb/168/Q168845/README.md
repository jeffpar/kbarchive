---
layout: page
title: "Q168845: Windows NT SMS Clients Produce NT Event 3031"
permalink: /kb/168/Q168845/
---

## Q168845: Windows NT SMS Clients Produce NT Event 3031

	Article: Q168845
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.2,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding a Windows NT version 3.51 or 4.00 client into a Systems Management
	Server version 1.2 Site a Windows NT event 3031 will be created in the System
	Event log of the client. The description of event 3031 is as follows:
	
	  The redirector was unable to delete the file specified on server
	  SMSLOGONSERVER when it was closed by the application. The data contains the
	  name of the file.
	
	CAUSE
	=====
	
	The Systems Management Server Windows NT client setup program Cli_nt.exe, during
	the creation of a Client Configuration Request (CCR), will create a client
	access token file in the Ccr.box directory on the client's logon server. The
	access token file named using the clients SMSID (Smsid.tok) is created using a
	flag FILE_FLAG_DELETE_ON_CLOSE. When the handle to this file is closed the file
	is deleted. Although the file has been deleted the Windows NT redirector
	attempts to remove this file which returns event 3031.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available for Windows NT version 4.0, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	Additional query words: 4.00 3.51 1.20 sms ccm winnt
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbSMSSearch kbSMS120
	Version           : winnt:1.2,3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
