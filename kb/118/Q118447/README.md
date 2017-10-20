---
layout: page
title: "Q118447: PC Adm: Using IMPORT -A Removes Users from Postoffice List"
permalink: /kb/118/Q118447/
---

## Q118447: PC Adm: Using IMPORT -A Removes Users from Postoffice List

{% raw %}

	Article: Q118447
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IMPORT utility (IMPORT.EXE) from version 3.0 or 3.2 of
	Microsoft Mail for PC Networks to import address modifications to the postoffice
	address list (POL), the users listed in the text file are deleted from the POL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. This problem was corrected in version 3.2a.
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base:
	
	  mailupd
	
	
	MORE INFORMATION
	================
	
	The following is an example of an IMPORT.EXE command line
	
	  import -dm -c -t -gsnads -a -fimport2.txt -l -v
	
	where the file IMPORT2.TXT contains modifications to the address list in the
	following format:
	
	  T SNADS:SNADSGATE/SNADSDGN
	  Division:~15~25~A~~
	  Department:~15~25~A~~
	  Phone #:~15~23~NP~~
	  Net #:~15~10~NP~~
	  FAX #:~15~23~NP~~
	  Address:~15~40~A~~
	  City/ST/Zip:~15~40~A~~
	
	  A Doe, John D. SNADS:SNADSGATE/SNADSDGN/JOHNDOE
	  - Division:/DIVISION 1
	  - Department:/DEPT 1
	  - Phone #:/800 936 5900
	  - Address:/123 American Way
	  - City//ST//Zip:/Any City, Any State, 12345
	  A Doe, Jane B. SNADS: SNADSGATE/SNADSDGN/JANEDOE
	  - Division:/DIVISION 2
	  - Department:/DEPT 2
	  - Phone #:/800 936 5900
	  - FAX #:/206 635 7022
	  - Address:/123 Someplace Lane
	  - City//ST//Zip:/Any City, Any State, 12345
	
	The DIRSYNC.LOG file will indicate a warning that will include a list of users'
	mail aliases. These mail aliases are the aliases of the users deleted from the
	POL. By viewing this log file and examining the mail aliases, the administrator
	can determine which users have been deleted. Below is an example from the
	DIRSYNC.LOG file:
	
	  03/22/94 15:43:25 | Status       Microsoft (R) Mail Import V3.2
	  03/22/94 15:43:45 | Warning[ 27] Alias already exists Doe, John D
	  03/22/94 15:43:46 | Warning[ 27] Alias already exists Doe, Jane B
	  03/22/94 15:43:50 | Status       Import is finished.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
