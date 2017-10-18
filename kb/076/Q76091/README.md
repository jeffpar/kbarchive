---
layout: page
title: "Q76091: CONN: Default .INI File for MS Mail Connection 1.0"
permalink: kb/076/Q76091/
---

## Q76091: CONN: Default .INI File for MS Mail Connection 1.0

	Article: Q76091
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This is a listing of the MSGATE.INI file, which can be found in the MSGATE\INI
	subdirectory of the Microsoft Mail for PC Networks database.
	
	NOTE: The # sign indicates comments in the actual MSGATE.INI file.
	
	  # Initialization file for MS Mail Connection
	  #
	  # User and password specify the account which is to be used by
	  # the Connection when importing and exporting userlists. This
	  # user must have administrator privileges on the postoffice. Make
	  # sure to specify the correct password. This user name and
	  # password must correspond to an administrative user on all the
	  # postoffices specified in ImportDrive below.
	
	     User = Admin
	     Password = Password
	
	  # StoreDrive is the letter mapped to the root directory of the
	  # gateway store.
	  #
	  # StorePath is the path to the gateway store from the root
	  # of the StoreDrive.
	
	     StoreDrive = M
	     StorePath = MSGATE\STORE
	
	  # ImportDrive is the letter of the drive mapped to the maildata
	  # directory of the Gateway Post Office to which the AppleTalk
	  # userlist should be imported. To import to multiple postoffices,
	  # add multiple "ImportDrive = " lines.
	
	     ImportDrive = m
	
	  # If you want to send the AppleTalk directory to another user,
	  # specify that user's address with the ImportSend parameter.
	  #
	  # ImportSend = Network/PostOffice/UserID
	
	  # LogPath specifies a path to the MSGATE.LOG file.
	
	     LogPath = msgate.log
	
	  # LogLevel specifies the information which should be
	  # recorded in the log file.  The acceptable values are
	  # 0 for no log information, 1 for error messages only,
	  # and 2 for error messages and activity details.
	
	     LogLevel = 1
	
	  # Frequency specifies the frequency (in minutes) with
	  # which the gateway checks for new mail.
	
	     Frequency = 1
	
	  # RunTime specifies the number of minutes MSGATE.EXE will
	  # run before automatically quitting. To run continuously,
	  # this should be set to 0.
	
	     RunTime = 0
	
	  # NetBIOS specifies whether users should be notified of
	  # new mail using NetBIOS.
	
	     NetBIOS = on
	
	Additional query words: init 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100
	Version           : :1.0
	
	=============================================================================
	
