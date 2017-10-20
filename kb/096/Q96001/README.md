---
layout: page
title: "Q96001: PC DirSync: Error and Status Msgs #9 - 29"
permalink: /kb/096/Q96001/
---

## Q96001: PC DirSync: Error and Status Msgs #9 - 29

{% raw %}

	Article: Q96001
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Directory Synchronization Error and Status Messages #9 - 29
	-----------------------------------------------------------
	
	On Microsoft Mail for PC Networks version 3.0 Server Disk 1, there is a file
	called DIRSYNC.TXT that contains the error codes used in directory
	synchronization (Dir-Sync) and in the IMPORT utility for Mail. The errors are
	logged in the DIRSYNC.LOG file.
	
	  [9] Out of Memory
	
	  Ensure that you are running the program on a computer with at least 640K of
	  memory.
	
	  [10] Directory Sync has not been enabled
	
	  Ensure that your postoffice is a version 3.0 postoffice. If it is not,
	  upgrade to version 3.0 before continuing.
	
	  [12] Invalid character in column 1
	
	  The import file has an invalid character in column 1.
	
	  Check the file for an invalid code in column 1. The valid codes are A (Add), D
	  (Delete), M (Modify), R (Replace) and T (Template file).
	
	  Also check the file for an invalid character in column 1 following the line
	  that contains the code. The line that follows Add, Delete or Modify codes and
	  contains specific user template information should have a hyphen in column 1.
	  Lines that follow a T code and are part of a template file should have a
	  space in column 1.
	
	  [13] Invalid transaction command
	
	  Check the import file for an invalid code in column 1. The valid codes are A
	  (Add), D (Delete), M (Modify), R (Replace), and T (Template file).
	
	  [14] Error processing RESYNC.GLB
	
	  The Import utility is temporarily unable to generate RESYNC.GLB. Run the
	  Import utility again with the -S option to clear the problem.
	
	  [15] Invalid character in phone number
	
	  Check the import file for an invalid character in at least one of the FAX
	  phone number fields. Valid phone number characters are digits, the space, the
	  comma (,) and the hyphen (-).
	
	  [16] Unknown address type
	
	  Check the import file for an invalid address. See the Server version
	  Administrator's Guide for the format of Microsoft Mail addresses and the
	  specific gateway manual for the format of foreign addresses.
	
	  [17] Unexpected end of line in node address
	
	  Microsoft Mail type addresses (PCM, PROFS, SNADS and OV) require a network
	  (or gateway name) and a postoffice (or a node or DGN) separated by a slash
	  mark (/). Check the import file for at least one Microsoft Mail type address
	  that is not correctly specified.
	
	  [18] Unexpected end of line in fullname
	
	  Check the import file for a missing address and possibly a missing portion of
	  the fullname (the alias) following an Add (A), Delete (D) or Modify (M) code.
	
	  [19] Unexpected end of line in physical address
	
	  Microsoft Mail type addresses (PCM, PROFS, SNADS and OV) require a network
	  name (or gateway name), a postoffice name (or a NodeID or DGN), and a mailbox
	  name (or UserID or DEN) separated by slash marks (/). The address is preceded
	  by an address type and a colon (:). The following is an example of a PROFS
	  address:
	
	  PROFS:VMGATE/NODE1/USER1
	
	  Check the import file in lines containing Add (A), Delete (D) and Modify (M)
	  codes for at least one Microsoft Mail type address that is not correctly
	  specified.
	
	  [20] Address element is too long
	
	  Check the import file for Microsoft Mail type addresses (PCM, PROFS, SNADS
	  and OV addresses) that have a network name (or gateway name), postoffice name
	  (or NodeID or DGN) or a mailbox name (or UserID or DEN) that exceeds ten
	  characters.
	
	
	  [21] Input file is corrupt or has incorrect format.
	
	  Check the import file for any lines that are not in the correct format.
	
	  [22] Expecting '/' in template information line
	
	  The import file requires a slash mark (/) to separate a template prompt from
	  template information. The format of the line is:
	
	  -prompt/information
	
	  Check the import file for at least one missing prompt/information slash mark
	  separator.
	
	  [23] Expecting tab or space
	
	  Check the import file for invalid characters where there should be a tab or a
	  space. For example, when specifying to Add (A), Delete (D) or Modify (M) an
	  address, there must either be spaces in columns 2 and 33, or the alias must
	  be separated from the address code (A, D, or M) and the address type by tabs.
	
	  [24] Template info not allowed for this address type
	
	  Check the import file for template information specified for an address that
	  does not support templates. The types of addresses that do not support
	  templates are: MCI, X400, SMTP, MHS, MSMAIL, and FAX. Remove any template
	  information that appears with addresses of these types.
	
	  [25] Physical address is too long
	
	  Check the import file for an address following an Add (A), Delete (D) or
	  Modify (M) code that exceeds the size limit.
	
	  [26] Error in physical address
	
	  There is an error in at least one address in the import file following an Add
	  (A), Delete (D) or Modify (M) code. The error is most likely in an MCI or FAX
	  address. Both of these types of addresses have carriage returns within the
	  address while the import file format requires the address to fit on one line.
	  The solution is to substitute different characters for the carriage return.
	  For FAX addresses in the import file, tildes (~) separate the four fields of
	  the physical address. The Import utility replaces these with carriage returns
	  before storing the address in the postoffice data files. For MCI addresses in
	  the import file, a space substitutes a carriage return-linefeed. The Import
	  utility inserts the required carriage return-linefeeds into the address
	  before storing it in the postoffice data files.
	
	  [27] Alias already exists
	
	  Check the import file for aliases following an Add (A) or a Modify (M) code
	  that already exists in one of the postoffice's address lists. All address
	  lists except for the Global Address List must have unique aliases.
	
	  [28] Duplicate alias in transaction queue
	
	  Check the import file for duplicate aliases destined for the same address
	  list in lines containing Add (A) or Modify (M) codes.
	
	  [29] Alias does not exist
	
	  Check the import file lines containing Delete (D) or Modify (M) codes for an
	  alias that does exist.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
