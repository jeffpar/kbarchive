---
layout: page
title: "Q143233: XADM: Command-Line Parameters for Edbutil.exe"
permalink: kb/143/Q143233/
---

## Q143233: XADM: Command-Line Parameters for Edbutil.exe

	Article: Q143233
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbtool kbusage exc4 exc5
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	CAUTION: This article contains information about the Microsoft Exchange
	database utility (edbutil /d /r). Using it incorrectly can cause problems.
	Before you run this utility, you should first make a backup copy of the
	database files. Microsoft cannot guarantee that problems resulting from the
	use of the utility can be solved. Use this tool at your own risk.
	
	SUMMARY
	=======
	
	This article shows the command line parameters for running Edbutil.exe.
	Edbutil.exe is used for database repair. It can be used to repair the following
	databases
	
	  \Exchsrvr\Dsadata\Dir.edb - Directory Database
	  \Exchsrvr\Mdbdata\Priv.edb - Private Folders Database
	  \Exchsrvr\Mdbdata\Pub.edb - Public Folders Database
	
	where \Exchsrvr is the directory where Exchange Server is installed.
	
	If you are having problems starting the information store, please see the
	following article in the Microsoft Knowledge Base before you run the Edbutil.exe
	utility:
	
	  Q147244 XADM: Troubleshooting Information Store Start Up Problems
	
	MORE INFORMATION
	================
	
	To see the command line options for Exchange Server Database Utilities, open an
	MS-DOS command prompt on the Exchange Server computer, change to the
	\Exchsrvr\Bin directory, and then type
	
	  Edbutil.exe /?
	
	at the command prompt. You will see the following:
	
	Microsoft(R) Exchange Server Database Utilities
	
	Version 4.0
	
	Copyright (C) Microsoft Corporation 1991-1996.  All Rights Reserved.
	
	DESCRIPTION:  Maintenance utilities for Microsoft(R) Exchange Server
	databases.
	
	MODES OF OPERATION:
	  Defragmentation:  EDBUTIL /d <database name> [options]
	         Recovery:  EDBUTIL /r [options]
	         Backup:  EDBUTIL /b <backup path> [options]
	         Upgrade:  EDBUTIL /u <database name> /d<previous .DLL> [options]
	         File Dump:  EDBUTIL /m[mode-modifier] <filename>
	
	<<<<<  Press a key for more help  >>>>>
	D=Defragmentation, R=Recovery, C=Consistency, U=Upgrade, M=File Dump =>
	
	Selecting D shows the following options:
	
	DEFRAGMENTATION/COMPACTION:
	
	   DESCRIPTION:  Performs off-line compaction of a database.
	         SYNTAX:  EDBUTIL /d <database name> [options]
	         PARAMETERS:  <database name> - filename of database to compact,
	                                   or one of /ispriv, /ispub, or /ds (see
	                                   NOTES below)
	         OPTIONS:  zero or more of the following switches, separated by a
	                   space:
	                 /l<path> - location of log files (default: current
	                            directory)
	                 /s<path> - location of system files (eg. checkpoint file)
	                            (default: current directory)
	                 /r       - repair database while defragmenting
	                 /b<db>   - make backup copy under the specified name
	                 /t<db>   - set temp. database name (default:
	                            TEMPDFRG.EDB)
	                            Note: Do not put a space between the switch
	                            and the database name.
	                 /p       - preserve temporary database (ie. don't
	                            instate)
	                 /n       - dump defragmentation information to
	                            DFRGINFO.TXT
	                 /o       - suppress logo
	         NOTES:  1) The switches /ispriv, /ispub, and /ds use the Registry
	                    to automatically set the database name, log file path,
	                    and system file path for the appropriate Exchange
	                    store.
	                 2) Before defragmentation begins, soft recovery is always
	                    performed to ensure the database is in a consistent
	                    state.
	                 3) If instating is disabled (ie. /p), the original
	                    database is preserved uncompacted, and the temporary
	                    database will contain the defragmented version of the
	                    database.
	
	Selecting R shows the following options:
	
	RECOVERY:
	
	         DESCRIPTION:  Performs recovery, bringing all databases to a
	                       consistent state.
	         SYNTAX:  EDBUTIL /r [options]
	         OPTIONS:  zero or more of the following switches, separated by a
	                   space:
	                 /is or /ds - see NOTES below
	                 /l<path>   - location of log files
	                              (default: current directory)
	                 /s<path>   - location of system files (eg. checkpoint
	                              file)
	                              (default: current directory)
	                 /o         - suppress logo
	         NOTES:  1) The special switches /is and /ds use the Registry to
	                    automatically set the log file path and system file
	                    path for recovery of the appropriate Exchange
	                    store(s).
	
	Selecting C shows the following options:
	
	CONSISTENCY:
	
	         DESCRIPTION:  Verifies consistency of a database.
	         SYNTAX:  EDBUTIL /c <database name> [options]
	         PARAMETERS:  <database name> - filename of database to verify, or
	                                        one of /ispriv, /ispub, or /ds
	                                       (see NOTES below)
	         OPTIONS:  zero or more of the following switches, separated by a
	                   space:
	                 /a       - check all nodes, including deleted ones
	                 /k       - generate key usage statistics
	                 /p       - generate page usage information
	                 /t<name> - performs a check on the specified table only
	                            (default: checks all tables in the database)
	                            Note: Do not put a space between the switch
	                            and the database name.
	                 /o       - suppress logo
	          NOTES:  1) The consistency-checker performs no recovery and
	                     always assumes that the database is in a consistent
	                     state, returning an error if this is not the case.
	                  2) The special switches /ispriv, /ispub, and /ds use the
	                     Registry to automatically set the database name for
	                     the appropriate Exchange store.
	
	Selecting U shows the following options:
	
	UPGRADE:
	
	         DESCRIPTION:  Upgrades a database (created using a previous
	                       release of Microsoft(R) Exchange Server) to the
	                       current version.
	         SYNTAX:  EDBUTIL /u <database name> /d<previous .DLL> [options]
	         PARAMETERS:  <database name>   - filename of the database to
	                                          upgrade.
	                 /d<previous .DLL> - pathed filename of the .DLL that came
	                                     with the release of Microsoft(R)
	                                     Exchange Server from which you're
	                                     upgrading.
	          OPTIONS:  zero or more of the following switches, separated by a
	                    space:
	                 /b<db> - make backup copy under the specified name
	                 /t<db> - set temporary database name (default:
	                          TEMPUPGD.EDB)
	                          Note: Do not put a space between the switch
	                          and the database name.
	                 /p     - preserve temporary database (ie. don't instate)
	                 /n     - dump upgrade information to UPGDINFO.TXT
	                 /o     - suppress logo
	         NOTES:  1) This utility should only be used to upgrade a database
	                    after an internal database format change has taken
	                    place.
	                    If necessary, this will usually only coincide with the
	                    release of a major, new revision of Microsoft(R)
	                    Exchange Server.
	                 2) Before upgrading, the database should be in a
	                    consistent state. An error will be returned if
	                    otherwise.
	                 3) If instating is disabled (ie. /p), the original
	                    database is preserved unchanged, and the temporary
	                    database will contain the upgraded version of the
	                    database.
	
	Selecting M shows the following options:
	
	FILE DUMP:
	
	         DESCRIPTION:  Generates formatted output of various database file
	                       types.
	         SYNTAX:  EDBUTIL /m[mode-modifier] <filename>
	         PARAMETERS:  [mode-modifier] - an optional letter designating the
	                      type of file dump to perform. Valid values are:
	                                   h - dump database header (default)
	                                   k - dump checkpoint file
	                 <filename>  - name of file to dump. The type of the
	                               specified file should match the dump type
	                               being requested (eg. if using /mh, then
	                               <filename> must be the name of a database).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
