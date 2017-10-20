---
layout: page
title: "Q181028: Print Server Resets LPI During Print Job"
permalink: /kb/181/Q181028/
---

## Q181028: Print Server Resets LPI During Print Job

{% raw %}

	Article: Q181028
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	On most LU3 print jobs, each LU3 "screen" of data contains an "Erase/Write"
	command at the end of the "screen" that resets the print job, including LPI
	(Lines Per Inch), to the default specified in the print session properties.
	There may be cases in which the defaults do not need to be reset. SNA Print
	Server always resets the LU3 print jobs after each "screen" of data.
	
	CAUSE
	=====
	
	An Erase/Write command causes everything to be reset on an LU3 print job
	(including LPI) so that formatting information from one "screen" of data does
	not effect the next "screen".
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Apply the fix referenced below.
	
	2. Start the Windows NT Registry Editor (Regedt32.exe) and find the following
	  key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	     \Services\SnaPrint\Parameters\ 
	
	3. Add the following entry to this key:
	
	  Value Name: DontResetForEveryLU3PrintScreen
	  Data Type: REG_SZ
	  String: True
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2 and 4.0. This problem was corrected in the latest SNA Server
	versions 3.0 and 4.0 U.S. Service Packs. For information on obtaining these
	Service Packs, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the fix applied, if a registry entry "DontResetForEveryLU3PrintScreen"
	exists, Print Server does not reset the LU3 print job parameters to the default
	between every LU3 screen.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
