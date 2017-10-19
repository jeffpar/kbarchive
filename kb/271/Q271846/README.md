---
layout: page
title: "Q271846: Event 5170 Occurs If Backup Server Is Unavailable During Upgrade"
permalink: /kb/271/Q271846/
---

## Q271846: Event 5170 Occurs If Backup Server Is Unavailable During Upgrade

	Article: Q271846
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a backup Host Integration Server (HIS) computer cannot be contacted when the
	configuration file is upgraded on the primary HIS computer, the SNA Manage Agent
	records event ID 5170 in the Application event log. This warning message
	indicates that some registry settings for the Print Server service or the Shared
	Folders Gateway service on the backup server may not have been correctly
	migrated to the configuration file.
	
	CAUSE
	=====
	
	The description for event ID 5170 is as follows:
	
	  The Server Sna2 was not available while the com.cfg configuration was
	  migrated. If you had any special registry entries for Print Server or Shared
	  Folders Gateway please update the configuration manually.
	
	When the primary Host Integration Server is updated by the Setup program, the
	primary server?s Snaadmin.dll file searches for each backup server?s registry
	entries. For the Print Server service, the registry key is:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\SnaPrint\Parameters
	
	For the Shared Folders Gateway service, the registry key is:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\SFGW\Parameters
	
	The following SnaPrint registry entries may not have been migrated to the new
	Com.cfg file:
	
	  HonorCharsUnder0x40
	  FlushFF
	  UseProportionalFontFix
	  NoSpaceAfterFF
	  DelayPrintStart
	  DoAllLU3FFs
	  BypassGDIForLU3
	  DontResetForEveryLU3PrintScreen
	  AlwaysDoNL
	  SetFixedTabs
	  ActivationRetryLimit
	  ActivationRetryIntervalBR/>
	
	The following Shared Folders Gateway registry entry may not have been migrated
	correctly:
	
	  S36/RemoteLUAlias
	
	RESOLUTION
	==========
	
	To manually update these entries, change the Print Server properties for the
	appropriate server. You do not need to modify the registry.
	
	MORE INFORMATION
	================
	
	The following table explains the relation between the registry key and the Print
	Server property that it modifies:
	
	+------------------------------------------------------------------+
	| Registry Entry                  | Print Server Property          | 
	+------------------------------------------------------------------+
	| HonorCharsUnder0x40             | Ignore Characters 3F and Under | 
	+------------------------------------------------------------------+
	| FlushFF                         | Flush Final FF                 | 
	+------------------------------------------------------------------+
	| UseProportionalFontFix          | Use Proportional Font Change   | 
	+------------------------------------------------------------------+
	| NoSpaceAfterFF                  | No Space After FF              | 
	+------------------------------------------------------------------+
	| DelayPrintStart                 | Delay Print Start              | 
	+------------------------------------------------------------------+
	| DoAllLU3FFs                     | Do All FF                      | 
	+------------------------------------------------------------------+
	| BypassGDIForLU3                 | Support Embedded Printer Codes | 
	+------------------------------------------------------------------+
	| DontResetForEveryLU3PrintScreen | Support Embedded Printer Codes | 
	+------------------------------------------------------------------+
	| AlwaysDoNL                      | Always Do NL                   | 
	+------------------------------------------------------------------+
	| SetFixedTabs                    | Use Fixed Tabs                 | 
	+------------------------------------------------------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	
