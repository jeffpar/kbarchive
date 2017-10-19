---
layout: page
title: "Q196974: How to Dial Phone Access Codes with Dial Up Networking"
permalink: /kb/196/Q196974/
---

## Q196974: How to Dial Phone Access Codes with Dial Up Networking

	Article: Q196974
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some local PBX switches will not allow local or long distance calls without
	first entering an access code. Some switches also require an access code after
	the number has been dialed. The use of calling card rules in Telephony will
	allow Dial-Up Networking to dial these access codes to reach outside lines.
	
	Windows NT Server 4.0 with Service Pack 4 and Windows 98
	--------------------------------------------------------
	
	1. Click Start, point to Settings, and click Control Panel. Double-click the
	  Telephony icon.
	
	2. On the My Locations tab, click Calling Card.
	
	3. When the Calling card box appears, click New and give the card a name. Click
	  OK to dismiss the dialog box that appears after you enter the name.
	
	4. To set the dialing rules for this card, click Long Distance Calls. Select the
	  number to dial for each step. Any access code should be entered under
	  Specific Digits. In the drop down box for the last step you use, click Done.
	  Click OK.
	
	5. Set International calls in the same manner.
	
	6. Click OK when done setting up rules.
	
	7. Click to select the For Long Distance Calls, Use This Calling Card check box
	  and then select the calling card you just created. Click OK.
	
	Windows NT Server 4.0, Terminal Server Edition 4.0 and
	Windows NT Server 4.0 with Service Pack 3 or earlier
	-----------------------------------------------------------------------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel. Double- click
	  the Telephony icon.
	
	2. On the My Locations tab, click to select the Dial Use Calling Card check box.
	  The default will be None (direct dial).
	
	3. Click Change.
	
	4. When the Change Calling card dialog box appears, click New and then give the
	  card a name. Click OK to dismiss the dialog box that appears after you enter
	  the name.
	
	5. When prompted for calling card rules, enter the string to dial for each type
	  of call: local, long distance, and international.
	
	For a list of all acceptable strings, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q167220 How to Create Custom Calling Card Rules
	
	Windows 95
	----------
	
	1. Click Start, point to Settings, and then click Control Panel. Double- click
	  the Modems icon.
	
	2. On the General tab, click to select the Dialing Properties check box.
	
	3. On the My Locations tab, click to select the Dial Use Calling Card check box.
	  If an entry is already listed, click Change.
	
	4. When the Change Calling Card dialog box appears, enter a space in the box for
	  the calling card to use. Click New and give the new card a name. If the rules
	  box does not appear, click Advanced to enter rules.
	
	5. When prompted for calling card rules, enter the string to dial for each type
	  of call: local, long distance, and international.
	
	For a list of all acceptable strings, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q167220 How to Create Custom Calling Card Rules
	
	MORE INFORMATION
	================
	
	The autodial feature of Proxy Server will ignore Telephony settings in some
	cases. For additional information, refer to the following article:
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q181407 Troubleshooting Proxy RAS Autodial and Autodisconnect
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0,4.0a,4.5
	Issue type        : kbinfo
	
	=============================================================================
	
