---
layout: page
title: "Q139364: RAS Error: &quot;The communications device attached to port...&quot;"
permalink: /kb/139/Q139364/
---

## Q139364: RAS Error: &quot;The communications device attached to port...&quot;

	Article: Q139364
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive one or more occurrences of the following error message in the System
	Log of the Windows NT Event Viewer:
	
	  Event ID: 20015
	  Source: RemoteAccess
	  Description: The communications device attached to port COMX is not
	  functioning.
	
	  NOTE: X represents the number of a COM port.
	
	Additionally, the Port Status option of the Remote Access Admin utility reports
	the following for the COM port:
	
	  Modem Condition: Hardware failure
	  Line Condition: Line non-operational
	
	CAUSE
	=====
	
	You have configured RAS to allow dial-in for one or more modems with a device
	name equal to 32 characters in length. This problem will likely appear if you
	are using a multiport serial adapter and multiple ports are configured for
	devices with names equal to 32 characters. The error message may not appear for
	all ports configured with a device name equal to 32 characters.
	
	RESOLUTION
	==========
	
	Edit the device name in %SystemRoot%\system32\ras\MODEM.INF so that it is no
	more than 31 characters in length. Although the documented limit to the length
	of a device name in MODEM.INF is 32 characters, using less than 32 characters
	solves the problem. Use the following steps to workaround this problem:
	
	1. Open %SystemRoot%\system32\ras\MODEM.INF in a text editor.
	
	2. Find the section in MODEM.INF that corresponds to your modem. This section
	  will be identified by the name of the modem enclosed in square brackets.
	
	3. Modify the name of the modem so it is no more than 31 characters in length.
	  The open and close square bracket characters do not count as one of the 31
	  characters.
	
	4. Save MODEM.INF.
	
	5. Open the Network section of Control Panel.
	
	6. Configure the Remote Access Service.
	
	7. Choose the Configure button and select the new device name entered in step 3,
	  then choose OK.
	
	8. Choose Continue, then choose OK.
	
	9. Shutdown and restart Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: DigiBoard
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
