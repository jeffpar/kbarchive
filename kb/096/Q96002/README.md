---
layout: page
title: "Q96002: PC DirSync: Error and Status Msgs #30 - 59"
permalink: /kb/096/Q96002/
---

## Q96002: PC DirSync: Error and Status Msgs #30 - 59

{% raw %}

	Article: Q96002
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
	
	Directory Synchronization Error and Status Messages #30 - 59
	------------------------------------------------------------
	
	On Microsoft Mail for PC Networks version 3.0 Server Disk 1, there is a file
	called DIRSYNC.TXT that contains the error codes used in directory
	synchronization (Dir-Sync) and in the IMPORT utility for Mail. The errors are
	logged in the DIRSYNC.LOG file.
	
	[30]    Error accessing transaction file
	  Check to make sure the transaction files exist and/or are not corrupt.
	  Files to check are SRVTRANS.GLB, REQTRANS.GLB, USRTRANS.GLB,
	  NMETRANS.GLB, and GWTRANS.GLB.
	
	[31]    Network not found
	  Check the import file for a network name that is not defined at
	  this postoffice.
	
	[32]    Postoffice not found
	  Check the import file for a postoffice name that is not defined at
	  this postoffice.
	
	[33]    Template file not found
	  If you are running Import as a stand-alone utility, use the
	  template file (T) code in the import file to import a new template
	  file for the requestor. Otherwise, submit an Import request to the
	  directory server postoffice with the Administrator program. The
	  response to your import request will include the template file.
	
	[34]    Template information not accessible
	  Try the operation again. If the problem continues, check that there
	  is still a connection to the server. If the connection to the
	  server is still intact, check that the specified filename exists
	  and is not locked open, preventing Import from accessing it.
	  Contact your network vendor to determine how to find and close
	  files that are locked open. If the specified filename is ADMIN.INF,
	  copy backups of ADMIN.INF and ADMIN.TPL to your data files. If the
	  specified filename is for an external postoffice, submit an Import
	  request to your directory server postoffice. The response to your
	  import request will include the template information.
	
	[35]    Template memory allocation error in file
	  Ensure that you are running Import on a computer with at least 640K
	  of memory.
	
	[36]    Template mismatch error in file
	  The template information in the .INF file does not match the
	  template prompts in the .TPL file. If changes are made in one file,
	  they must be reflected in the other file. Change the files so that
	  they match.
	
	[37]    Prompt not found in template
	  Check the import file for lines containing template information
	  that do not have a matching prompt in the template file.
	
	[38]    Error loading postoffice template
	  Try the operation again. If the problem continues, check that there
	  is still a connection to the server.  If the connection to the
	  server is still intact, run the Mail program and check an address
	  information window for a user in the specified network and
	  postoffice. If you cannot see any template prompts and template
	  information then either run the import utility with a template file
	  code (T) in the import file to import the template file of the
	  specified postoffice, or submit an Import request to your directory
	  server postoffice. The response to your import request will include
	  the template file.
	
	[39]    Error generating TID
	  Check that the TID.GLB file exists. If it cannot be found, it must
	  have been accidentally deleted and you should restore a back-up of
	  your data files. If TID.GLB exists, ensure that it is not locked
	  open. Contact your network vendor to determine how to find and
	  close files that are locked open.
	
	  The CONTROL.GLB file may be locked open. Contact your network
	  vendor to determine how to find and close files that are locked
	  open.
	
	[40]    Possible database corruption detected
	  In most cases, the problem in the data files is not serious enough
	  to prevent successful processing of transactions. If this causes a
	  fatal error, restore a backup of your data files.
	
	[41]    Internal sort error
	  This is an internal error. Please notify Microsoft Product Support
	  Services. Transactions will be processed correctly except if you
	  are updating the Postoffice Address List with the -R command line
	  option, which requires correct sorting in order to avoid missing
	  aliases.
	
	[42]    File already opened and locked
	  The network operating system has an open file handle to this file.
	  Close the open handle with network utility if one is available.
	
	[43]    Gateway alias has no physical address
	  There is no address specified for this gateway alias. Run the
	  Administrator program and try to delete the alias. If this is not
	  possible, either run Import as a stand-alone utility with the
	  Replace (R) code to replace the entire list for this gateway, or
	  submit an Import request to your directory server postoffice. The
	  response to your import request will include the list for this
	  gateway.
	
	[44]    Gateway not installed
	  There is a directory synchronization transaction for an address
	  type that is not recognized at the postoffice. Install the Gateway
	  Access component for this address type before trying to process
	  this type of transaction.
	
	[45]    File error sorting queue
	  Try the operation again. If the problem continues, check that there
	  is still a connection to the server.
	
	[46]    No fullname
	  Check the import file for lines that are missing an alias
	  (fullname).
	
	[47]     Transaction has no effect
	  Check the transaction format for errors.
	
	[48]    Expecting physical address
	  Check the import file for lines that are missing an address.
	
	[49]     Fatal error creating network:
	  During the autocreate function, the new network name could not be
	  created. Make sure the NETWORK.GLB and *.XTN files are not corrupt.
	
	[50]     Fatal error creating postoffice:
	  During the autocreate function, the new postoffice name could not be
	  created. Make sure the *.XTN files are not corrupt. Ensure the MBG
	  and KEY subdirectories are not write protected.
	
	[51]    Error creating mailbag
	  Ensure that the computer that is running Import has at least 640K
	  of memory. One of the data files could be locked open, so try the
	  operation again. Also check that there is still a connection to the
	  server. If the problem continues, use the Administrator program to
	  create the user.
	
	[52]    Error accessing configuration information
	  If this error occurs while running the Import utility, try the
	  operation again. If the problem continues, the REQCONF.GLB may be
	  locked open. Contact your network vendor to determine how to find
	  and close files that are locked open.
	
	  If this problem occurs while running the Dispatch program, try the
	  operation again. If the problem continues, check that the MASTER.GLB
	  file is in the GLB directory. If it is not there, it may have been
	  accidentally deleted and you should restore a backup of your data
	  files. If it is there, it may be locked open. Contact your network
	  vendor to determine how to find and close files that are locked
	  open.
	
	[53]    Unable to read network and postoffice definitions
	  Ensure that the computer you are running Import on has at least
	  640K of memory. Try the operation again. If the problem continues,
	  MASTER.GLB or an .XTN file may be locked open. Contact your network
	  vendor to determine how to find and close files that are locked
	  open.
	
	[54]    No Server name has been set
	  The requestor administrator must specify the directory server
	  postoffice before continuing.
	
	[55]    Can't find Dir-Sync Server postoffice definition
	  Ensure that the directory server postoffice has been specified at
	  the directory server postoffice itself and at all requestors.
	
	[56]    Error accessing input file
	  Try the operation again. If the problem continues, check that there
	  is still a connection to the server.
	
	  Check for someone editing the Import utility input file (specified
	  with -F command line option). If the problem continues, the file may
	  be locked open. Contact your network vendor to determine how to
	  find and close files that are locked open.
	
	[57]    Error accessing output file
	  Try the operation again. If the problem continues, check that there
	  is still a connection to the server. If the problem continues, the
	  Import utility output file (specified with the -F or -X command
	  line option) may be locked open. Contact your network vendor to
	  determine how to find and close files that are locked open.
	
	[58]    Error accessing database file
	  Ensure that there is still a connection to the server and try the
	  operation again. If the problem continues, the specified data file
	  may be locked open. Contact your network vendor to determine how to
	  find and close files that are locked open.
	
	[59]    Error autocreating postoffice: xxxxxx
	  Ensure that the computer running the Import utility has at least
	  640K of memory and that there is still a connection to the server.
	  One of the data files may be locked open. Contact your network
	  vendor to determine how to find and close files that are locked
	  open. You can also create the postoffice with the Administrator
	  program External-Admin Create command.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
