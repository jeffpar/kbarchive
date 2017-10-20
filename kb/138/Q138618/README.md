---
layout: page
title: "Q138618: ErrMsg: &quot;No Configuration Info ...&quot; with PCMCIA"
permalink: /kb/138/Q138618/
---

## Q138618: ErrMsg: &quot;No Configuration Info ...&quot; with PCMCIA

{% raw %}

	Article: Q138618
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
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
	
	When you install a PCMCIA card that is not registered in the registry database,
	the following error message appears in the event log:
	
	  No configuration information for <adapter name>
	
	CAUSE
	=====
	
	The Windows NT registry contains a database entry for the PCMCIA cards that
	Windows NT supports. This can be found in the key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\PCMCIA
	
	The error message appears if your PCMCIA card is not in the database.
	
	RESOLUTION
	==========
	
	1. Run PCMCMD.EXE. You can find this tool on Windows NT CD-ROM in the
	  \SUPPORT\DEBUG\I386 directory. Pipe the output to a file. For example:
	
	  PCMCMD > MYINFO.TXT
	
	2. From the output, record the "product name" and the "manufacturer name".
	
	3. Run Registry Editor (REGEDT32.EXE).
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	4. From the
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\PCMCIA\database
	
	5. Select Database
	
	6. Select Add Key from the Edit menu
	
	7. Enter the manufacturer name and choose the OK button For example, "National
	  Semiconductor"
	
	8. Select the manufacturer name
	
	9. Select Add Key from the Edit menu again
	
	10. Enter the product name and choose the OK button.
	
	  For example, "InfoMover NE4100"
	
	11. Select the product name
	
	12. Select Add Value from the Edit menu
	
	13. Enter the word, "Driver," (without the quotation marks)
	
	14. Select the type, REG_SZ, and choose the OK button
	
	15. Enter the filename of the driver for the card WITHOUT the ".SYS"
	
	  extension and choose the OK button. For example, "ne2000"
	
	16. Shutdown and restart Windows NT.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
