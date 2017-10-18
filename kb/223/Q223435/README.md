---
layout: page
title: "Q223435: Err Msg: Error Code -2146893811 0x8009000D &quot;Key Does Not Exist&quot;"
permalink: kb/223/Q223435/
---

## Q223435: Err Msg: Error Code -2146893811 0x8009000D &quot;Key Does Not Exist&quot;

	Article: Q223435
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An active messaging script fails when you schedule it through Scheduled Tasks if
	no user is logged onto the computer; however, the same script will work if
	someone is logged onto the computer. More generally, all of the Internet
	Information Server administrative scripts fail when no one is logged onto the
	computer. The following error message occurs:
	
	  Error code -2146893811 0x8009000D "Key does not exist"
	
	CAUSE
	=====
	
	Because no user is logged onto the computer, it is impossible to open a security
	profile.
	
	WORKAROUND
	==========
	
	Lock the workstation instead of logging off the user.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	This problem was first corrected in Windows NT 4.0 Service Pack 6.
	
	
	Additional query words: Metabase GetObject
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
