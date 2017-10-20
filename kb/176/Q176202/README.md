---
layout: page
title: "Q176202: How to Troubleshoot WINS Event IDs 4261 and 4262"
permalink: /kb/176/Q176202/
---

## Q176202: How to Troubleshoot WINS Event IDs 4261 and 4262

{% raw %}

	Article: Q176202
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbtshoot
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows Internet Name Service (WINS) Server may log one of the following
	events in the system event log in Event Viewer:
	
	  Event ID   : 4262
	  Source     : WINS
	  Type       : Error
	  Description: WINS got an error while trying to register a unique
	               replica with name <computer name>. The replica is owned
	               by WINS with address given below.
	
	-or-
	
	  Event ID   : 4261
	  Source     : WINS
	  Type       : Error
	  Description: WINS got an exception while trying to register a group's
	               replica with name <group name>. The replica is owned by
	               WINS with address given below.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Using Event Viewer, double-click one of the events that have either ID 4262
	  or 4261 to get the event detail.
	
	2. In the data section, click Words and make a note of all parameters, which
	  should appear similar to the following:
	
	     0000:  0000103b 892e020c 00000000 0001d881
	
	  Value1: 0000103b is the line number in code that is generating the event.
	
	  Value2: 892e020c is the IP address of the owning WINS Server. You can convert
	  the data into an IP address by using two bytes for each octet as in the
	  following example:
	
	        892e020c would be 89 2e 02 0c.
	
	  Then use Calc.exe to convert each hexadecimal value to a decimal value:
	
	  +-------------------+
	  | 89 | equals | 137 | 
	  +-------------------+
	  | 2e | equals | 46  | 
	  +-------------------+
	  | 02 | equals | 02  | 
	  +-------------------+
	  | 0c | equals | 12  | 
	  +-------------------+
	
	  that results in an IP address of 137.46.02.12.
	
	  Value3: 00000000 is the low word of the version number of the WINS record.
	
	  Value4: 0001d881 is the high word of the version number of the WINS record.
	
	  You will need to convert both the high word and the low word from hexadecimal
	  to decimal as in the example data below:
	
	        00000000   equals   0
	        0001d881   equals   120961
	
	3. Use Winscl.exe to delete the record on the owning WINS Server and on all of
	  the replication partners that are logging the events:
	
	  a. Type the following at an MS-DOS command prompt, and then press Enter:
	
	     "Winscl T <IP Address of owning WINS Server>" (without the quotation
	     marks)
	
	  b. Get a record by version number by typing the following:
	
	     "GRBV" (without the quotation marks)
	
	  c. Type the address of the owner WINS Server, and then press Enter. (This is
	     the address that you converted in step 2 above.)
	
	  d. Type 1 to specify a range.
	
	  e. Type the following to specify the minimum version number:
	
	     "120961 00000000" (without the quotation marks)
	
	  f. Type the following to specify the maximum version number:
	
	     "120961 00000010" (without the quotation marks)
	
	  g. Type 0 to specify to not use a filter.
	
	  h. Type 1 to put records in a file named Wins.rec.
	
	4. After you have verified that the record exists you can then begin deleting
	  the record by version number on all of the WINS Servers where the record
	  exists. Use the following steps:
	
	  a. Type the following at a command prompt, and then press Enter:
	
	     "Winscl T <IP Address of owning WINS Server>" (without the quotation
	     marks)
	
	  b. Delete one or more records using a range by typing the following:
	
	     "DRR" (without the quotation marks)
	
	  c. Type the address of the owner WINS Server, and then press Enter. (This is
	     the address that you converted in step 2 above.)
	
	  d. Type 1 to specify a range.
	
	  e. Type the following to specify the minimum version number:
	
	     "120961 00000000" (without the quotation marks)
	
	  f. Type the following to specify the maximum version number:
	
	     "120961 00000000" (without the quotation marks)
	
	5. After this is done, you can then verify that the record has been deleted by
	  using the Winscl GRBV command as in step 3 above.
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbtshoot 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
