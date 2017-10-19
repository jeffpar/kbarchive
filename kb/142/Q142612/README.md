---
layout: page
title: "Q142612: TrueImage Errors 4014 When Printing from a Macintosh"
permalink: /kb/142/Q142612/
---

## Q142612: TrueImage Errors 4014 When Printing from a Macintosh

	Article: Q142612
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print with your user account from a Macintosh to a non-Postscript print
	queue on a Windows NT server, you may receive the following error message:
	
	  ID 4014
	  source- macprint
	  type- error
	  Category- TrueImage print
	  The TrueImage interpreter was unable to query the font list correctly to begin
	  processing job.
	
	NOTE: You can print from the Administrator account successfully.
	
	RESOLUTION
	==========
	
	To correct this problem, please install the fix below and follow these
	directions to create an account that the users can access:
	
	With SFM installed:
	
	1. Create a non-PS printer.
	
	2. Create an account called macuser.
	
	3. Double-click the Services icon in Control Panel.
	
	4. Select "Print Server for Macintosh" and choose Startup.
	
	5. Click This Account, type macuser, and then the password if you added one on
	  creation.
	
	6. Stop and restart macprint.
	
	7. Print to the non-PS printer from a Macintosh.
	
	For more information please refer to the Services for Macintosh documentation
	page 67-68.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Microsoft Windows NT 3.51 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	
	=============================================================================
	
