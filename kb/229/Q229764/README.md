---
layout: page
title: "Q229764: Err Msg: &quot;System error 87 has occured.&quot; On Alpha Computers"
permalink: /kb/229/Q229764/
---

## Q229764: Err Msg: &quot;System error 87 has occured.&quot; On Alpha Computers

	Article: Q229764
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type the following command at an MS-DOS command prompt on a computer
	running Windows NT with an Alpha processor
	
	NET PRINT //SERVER PrintJobID# /delete
	
	the following error message is displayed:
	
	  System error 87 has occured. The parameter is incorrect.
	
	Error 87 can be any of the following:
	
	  End of tape (end of tape when not expected). From device: name
	  [QIC117]
	  Use a different tape.
	
	  Error 87 occurred adding user ' user name '. User information:
	  [PORTUAS]
	
	  Error 87 indicates that PortUAS encountered an invalid parameter. The user
	  accounts database may be corrupted.
	  Contact technical support.
	
	  Error 87 occurred changing user ' user name '. User information:
	  [PORTUAS]
	
	  Error 87 indicates that PortUAS encountered an invalid parameter. The user
	  accounts database may be corrupted.
	  Contact technical support.
	
	  Error Adding Adapter Information To The Registry
	
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
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT version 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
