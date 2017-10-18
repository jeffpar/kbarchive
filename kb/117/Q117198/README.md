---
layout: page
title: "Q117198: PC Adm: IMPORT .INF File Size Increases When IMPORT -A Is Used"
permalink: kb/117/Q117198/
---

## Q117198: PC Adm: IMPORT .INF File Size Increases When IMPORT -A Is Used

	Article: Q117198
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IMPORT utility (IMPORT.EXE) included with versions 3.0 and 3.2
	of Microsoft Mail for PC Networks to modify users with template information, the
	size of the .INF file for this address list doubles in size each time IMPORT.EXE
	is used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. This problem was corrected in version 3.2a.
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base:
	
	  mailupd
	
	
	MORE INFORMATION
	================
	
	The following IMPORT command demonstrates this problem
	
	  import -dm -t -a -fimport.txt -l -v admin -ppassword
	
	where the text file IMPORT.TXT has a format similar to the following:
	
	M Doe, John D            SNADS:SNADSGATE/SNADSDGN/JOHNDOE
	 Doe, John D            SNADS:SNADSGATE/SNADSDGN/JOHNDOE
	- Division:/DIV 1
	- Department:/DEPT 1
	- Phone #:/800 936 5900
	- Address:/Any Street
	- City//ST//Zip:/City, State, 12345
	M Doe, Jane B              SNADS:SNADSGATE/SNADSDGN/JANEDOE
	 Doe, Jane B              SNADS:SNADSGATE/SNADSDGN/JANEDOE
	- Division:/DIV 1
	- Department:/DEPT 1
	- Phone #:/800 936 5900
	- FAX #:/206 635 7022
	- Address:/Any Street
	- City//ST//Zip:/City, State, 12345
	
	There are no known workarounds for this problem. This problem does not seem to
	adversely affect the template information.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
