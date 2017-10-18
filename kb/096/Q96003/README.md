---
layout: page
title: "Q96003: PC DirSync: Error and Status Msgs #60 - 118"
permalink: kb/096/Q96003/
---

## Q96003: PC DirSync: Error and Status Msgs #60 - 118

	Article: Q96003
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DIRECTORY SYNCHRONIZATION ERROR AND STATUS MESSAGES #60 - 118
	-------------------------------------------------------------
	
	On Microsoft Mail for PC Networks version 3.0 Server Disk 1, there is a file
	called DIRSYNC.TXT that contains the error codes used in directory
	synchronization (Dir-Sync) and in the IMPORT utility for Mail. The errors are
	logged in the DIRSYNC.LOG file.
	
	  [60] Using direct routing for autocreated postoffice
	
	  This is an information message. Because the Import utility is running from
	  the directory server postoffice, the routing for the new postoffice will be
	  direct via an MS-DOS drive. On any other postoffice, the autocreate feature
	  creates a new postoffice that has the same routing that the current
	  postoffice uses to reach the directory server postoffice.
	
	  [61] No template information defined for postoffice
	
	  The postoffice for which you are extracting addresses does not have any
	  template information. To get the template information, run the Administrator
	  program, set Config Dir-Sync Requestor Options Templates Receive to Yes and
	  then submit an Import request to the directory server postoffice by selecting
	  Config Dir-Sync Requestor Import. Or you can get the template information
	  from the administrator of the external postoffice, manually insert it into
	  the import file and then run Import to insert the information into your
	  postoffice's data files.
	
	  [62] Replace option failed
	
	  Try the operation again. Then check that there is still a connection to the
	  server and ensure that there is enough disk space to perform the operation.
	  If the problem continues, one of the data files may be locked open. Contact
	  your network vendor to determine how to find and close locked files.
	
	  [63] Resync extract failed
	
	  Try the operation again. Then check that there is still a connection to the
	  server. If the problem continues, one of the data files may be locked open.
	  Contact your network vendor to determine how to find and close locked files.
	
	  [64] Reserved network name
	
	  The network name of the postoffice you tried to create with Import's -C
	  autocreate option or with the Administrator program requestor Create-PO
	  option is a reserved name. Select another network name.
	
	  [65] No template defined for postoffice
	
	  You are trying to import users with template information to a postoffice that
	  has no template defined.
	
	  [66] Local postoffice transaction ignored
	
	  The Import utility does create local users. Use the Administrator program
	  Local-Admin commands to define users at your local postoffice. All lines in
	  the import file that contain transactions for local users will be ignored.
	
	  [67] Resync extract can be performed only at a Directory Synchronization
	  Server
	
	  You can run the Import utility with the -s and -st options at the directory
	  server postoffice only.
	
	  [68] Network name already in use
	
	  The network name of the postoffice you tried to create with the -C autocreate
	  option already exists. Select another network name.
	
	  [69] Alphanumeric characters only allowed in network name
	
	  Only letters and numbers are allowed in network names.
	
	  [70] Alphanumeric characters only allowed in postoffice name
	
	  Only letters and numbers are allowed in postoffice names.
	
	  [71] Alphanumeric characters only allowed in mailbox name
	
	  Only letters and numbers are allowed in mailbox names.
	
	  [72] Fullname is too long
	
	  Check the import file for at least one alias (fullname) that exceeds 30
	  characters.
	
	  [73] Template option not set, template information will be ignored
	
	  The Import utility cannot import template information. Ensure that the
	  Dir-Sync Requestor Options Templates Receive command in the Administrator
	  program is set to Yes, or if you use Import as a stand-alone utility, run the
	  utility with the -T command line option.
	
	  [74] FAX recipient address field too long
	
	  Check the import file for fax addresses that are too long. The maximum length
	  of the recipient field in a fax address is 30 characters. The four fax
	  address fields must be in the following order: recipient, location, company,
	  and phone number. The fields are separated by tildes (~).
	
	  [75] FAX location address field too long
	
	  Check the import file for fax addresses that are too long. The maximum length
	  of the location field in a fax address is 30 characters. The four fax address
	  fields must be in the following order: recipient, location, company, and
	  phone number. The fields are separated by tildes (~).
	
	  [76] FAX company address field too long
	
	  Check the import file for fax addresses that are too long. The maximum length
	  of the company field in a fax address is 30 characters. The four fax address
	  fields must be in the following order: recipient, location, company, and
	  phone number. The fields are separated by tildes (~).
	
	  [77] FAX phone number address field too long
	
	  Check the import file for fax addresses that are too long. The maximum length
	  of the phone number field in a fax address is 22 characters. The four fax
	  address fields must be in the following order: recipient, location, company,
	  and phone number. The fields are separated by tildes (~).
	
	  [78] Out of file handles
	
	  Ensure that the CONFIG.SYS file has FILES=20 (minimum). If the error
	  continues, increase this number.
	
	  [79] Out of disk
	
	  There is not enough disk space to run the program. Increase the available
	  disk space before continuing.
	
	  [80] Out of memory
	
	  Ensure that you are running the program on a computer with at least 640K of
	  memory.
	
	  [81] No mailbox name
	
	  Ensure the *.XTN files exist, are correct, and are not corrupt.
	
	  [82] Local user information not allowed for this address type
	
	  Check the import file to ensure local user profile information does not exist
	  for an externally defined user.
	
	  [83] Invalid local user token value:
	
	  [84] Invalid local user token:
	
	  [85] Unable to create local user:
	
	  [86] Unable to delete local user:
	
	  [87] Maximum number of local users has been reached
	
	  [88] Invalid token assignment:
	
	  [89] Truncating password to 8 characters:
	
	  [90] Transaction not processed
	
	  [91] The mail database is locked by another process:
	
	  Check to make sure the FLAG.GLB file is not locked open.
	
	  [92] Can't modify local user to external:
	
	  [93] ACCESS tokens ignored for admin user:
	
	  [100] Coding is incomplete
	
	  [101] Begin execution
	
	  [102] End process
	
	  [103] Could not parse value
	
	  [104] Requestor process failed
	
	  [105] ReqRx received n updates
	
	  [106] ReqTx send n updates
	
	  [107] No more records
	
	  [108] Error getting next record
	
	  [109] Error getting first record
	
	  [110] Failed to read the last transaction
	
	  Wait at least one synchronization cycle and try the operation again. If the
	  problem continues, copy a backup of the MSTTRANS.GLB file. Then ask all
	  requestors to export their address lists.
	
	  [113] Failure to send mail to
	
	  Ensure that there is still a connection to the server. Also ensure that there
	  is sufficient disk space to receive the mail. Wait at least one directory
	  synchronization cycle and try the operation again. If the problem continues,
	  contact Microsoft Product Support Services.
	
	  [114] Failure to delete a message
	
	  Ensure that there is still a connection to the server and try the operation
	  again. If the problem continues, contact Microsoft Product Support Services.
	
	  [115] Failure to read mail from
	
	  Ensure that the computer running the Dispatch program has 640K of memory and
	  that FILES=20 (minimum) in the CONFIG.SYS file. If the problem continues,
	  contact Microsoft Product Support Services.
	
	  [116] Attachment is missing or is empty
	
	  Check that the foreign requestor did not forget to send an attachment with
	  the system message. If the requestor did send the attachment, wait at least
	  one synchronization cycle as the problem will most likely clear up on its
	  own.
	
	  [118] Transaction limit reached
	
	  See message 166.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
