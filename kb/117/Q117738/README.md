---
layout: page
title: "Q117738: PC Adm: IMPORT.EXE Does Not Recover from Reset CONTROL.GLB"
permalink: kb/117/Q117738/
---

## Q117738: PC Adm: IMPORT.EXE Does Not Recover from Reset CONTROL.GLB

	Article: Q117738
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The IMPORT utility (IMPORT.EXE) does not properly recover after the CONTROL.GLB
	file is reset (bytes set to zero). If the Mail administrator uses IMPORT.EXE to
	add users to the local postoffice after a CONTROL.GLB reset, these new users
	receive the same hexadecimal identifiers (hex-IDs) as existing users.
	
	CAUSE
	=====
	
	The CONTROL.GLB file uses two long integers to generate new, unique filenames
	(hex-IDs): one for generating new mailbag names and one for generating new mail
	and attachment names.
	
	Every process that runs against the CONTROL.GLB file and generates any kind of
	new hex-ID can potentially corrupt or reset the CONTROL.GLB file. On occasion,
	some unknown problem (network, hardware, or software error) resets to zero all
	the CONTROL.GLB hex-IDs used for generating new mailbag names. When this
	happens, the Mail Administrator program (ADMIN.EXE) recognizes the error and
	properly resets the CONTROL.GLB for adding new users.
	
	IMPORT.EXE does not recognize the CONTROL.GLB problem, however, and if the Mail
	administrator uses the IMPORT utility against a text file to import new users to
	a local postoffice, these new users receive hex-IDs already owned by existing
	postoffice users.
	
	RESOLUTION
	==========
	
	One short-term solution for the Mail administrator is to run the Mail
	Administrator program and rename newly added users with the same hex-ID as
	previous users to some unusable username (such as TEST1, TEST2, and so forth).
	
	For further assistance, call Microsoft Mail Product Support Services. They can
	help you give the problem Mail accounts new hex-IDs so they can be either
	deleted or used properly, and can help you reset the CONTROL.GLB file so it
	contains usable values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. This problem was corrected in version 3.2a.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	MORE INFORMATION
	================
	
	Here is a sample listing of a postoffice for which IMPORT.EXE has created two
	users with the same hex-id:
	
	Name           ID number
	Admin          00000000
	User1          00000001
	User2          00000002
	User3          00000003
	User4          00000004
	NewUser1       00000000
	NewUser2       00000001
	NewUser3       00000002
	NewUser4       00000003
	NewUser5       00000004
	
	The administrator cannot delete these new, problem accounts without removing the
	mailbag files of the old users.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
