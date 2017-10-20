---
layout: page
title: "Q115362: X400: X400ADM.EXE Crashes to MS-DOS, Database Is Corrupted"
permalink: /kb/115/Q115362/
---

## Q115362: X400: X400ADM.EXE Crashes to MS-DOS, Database Is Corrupted

{% raw %}

	Article: Q115362
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start X400ADM.EXE, select the Local MTA button, enter a name and put a
	period and a comma at the end of the name, then enter the Country Code and Admd
	Name and select OK, the program crashes to MS-DOS with the message:
	
	  Path not found in line 0 of module LOCALMTA at address 9B84:06DA
	
	If you restart X400ADM.EXE and select the Local MTA button, you see that the
	database is corrupted:
	
	- the Country Code entry is in the Admd Name field
	
	- the Admd Name entry is moved to the Prmd Name field
	
	- the MTA's (name) entry is gone from the OUTGOING subdirectory
	
	CAUSE
	=====
	
	The comma is not a valid Name field character because the program interprets
	commas as separators--in this case for the Name and Password fields. For
	example:
	
	  MTA01,,,us, ATTMAIL,
	
	When this happens the data in the Country Code and Admd Name fields is displayed
	in the next field down (Country Code to Admd Name; Admd Name to Prmd Name).
	
	RESOLUTION
	==========
	
	Remove commas from MTA field entries.
	
	The failure is most spectacular in the MTA name, but a comma causes the same
	confusion in any MTA information field, since the underlying data file is
	delimited with commas.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
