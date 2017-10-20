---
layout: page
title: "Q182903: XADM: ESEUTIL Command Line Parameters"
permalink: /kb/182/Q182903/
---

## Q182903: XADM: ESEUTIL Command Line Parameters

{% raw %}

	Article: Q182903
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Exchange Server 5.5 includes a utility called Eseutil that replaces
	the Edbutil from earlier versions.
	
	MORE INFORMATION
	================
	
	The following command will output the information below:
	
	  C:\>ESEUTIL /?
	
	Microsoft(R) Exchange Server Database Utilities
	Version 5.5
	Copyright (C) Microsoft Corporation 1991-1997. All Rights Reserved.
	
	DESCRIPTION: Maintenance utilities for Microsoft(R) Exchange Server
	databases.
	
	MODES OF OPERATION:
	  Defragmentation:  ESEUTIL /d <database name> [options]
	         Recovery:  ESEUTIL /r [options]
	        Integrity:  ESEUTIL /g <database name> [options]
	          Upgrade:  ESEUTIL /u <database name> /d<previous .DLL> [options]
	        File Dump:  ESEUTIL /m[mode-modifier] <filename>
	           Repair:  ESEUTIL /p <database name> [options]
	
	  Note log file path must be specified explicitly
	  unless using /IS or /DS options.
	
	<<<<<  Press a key for more help  >>>>>
	D=Defragmentation, R=Recovery, G=Integrity, U=Upgrade, M=File Dump,
	P=Repair
	=>
	
	DEFRAGMENTATION (D)
	
	DEFRAGMENTATION/COMPACTION:
	DESCRIPTION:  Performs off-line compaction of a database.
	     SYNTAX:  ESEUTIL /d <database name> [options]
	 PARAMETERS:  <database name> - filename of database to compact, or one of
	                               /ispriv, /ispub, or /ds (see NOTES below)
	   OPTIONS:  zero or more of the following switches, separated by a space:
	             /l<path> - location of log files (default: current directory)
	             /s<path> - location of system files (e.g., checkpoint file)
	                        (default: current directory)
	             /b<db>   - make backup copy under the specified name
	             /t<db>   - set temp. database name (default: TEMPDFRG.EDB)
	             /p       - preserve temporary database (i.e., don't instate)
	             /o       - suppress logo
	     NOTES:  1) The switches /ispriv, /ispub, and /ds use the Registry
	                to automatically set the database name, log file path,
	                and system file path for the appropriate Exchange store.
	             2) Before defragmentation begins, soft recovery is always
	                performed to ensure the database is in a consistent state.
	             3) If instating is disabled (i.e., /p), the original database
	                is preserved uncompacted, and the temporary database will
	                contain the defragmented version of the database.
	
	RECOVERY (R)
	
	RECOVERY:
	DESCRIPTION:  Performs recovery, bringing all databases to a
	              consistent state.
	    SYNTAX:  ESEUTIL /r [options]
	   OPTIONS:  zero or more of the following switches, separated by a space:
	             /is or /ds - see NOTES below
	             /l<path>   - location of log files
	                          (default: current directory)
	             /s<path>   - location of system files (e.g., checkpoint file)
	                          (default: current directory)
	             /o         - suppress logo
	     NOTES:  1) The special switches /is and /ds use the Registry to
	                automatically set the log file path and system file path
	                for recovery of the appropriate Exchange store(s).
	
	INTEGRITY (G)
	
	INTEGRITY:
	DESCRIPTION:  Verifies integrity of a database.
	     SYNTAX:  ESEUTIL /g <database name> [options]
	 PARAMETERS:  <database name> - filename of database to verify, or one of
	                                /ispriv, /ispub, or /ds (see NOTES below)
	   OPTIONS:  zero or more of the following switches, separated by a space:
	             /t<db>   - set temp. database name (default: INTEG.EDB)
	             /v       - verbose
	             /x       - give detailed error messages
	             /o       - suppress logo
	     NOTES:  1) The consistency checker performs no recovery and always
	                assumes that the database is in a consistent state,
	                returning an error if this is not the case.
	             2) The special switches /ispriv, /ispub, and /ds use the
	                registry to automatically set the database name for the
	                appropriate Exchange store.
	
	UPGRADE (U)
	
	UPGRADE:
	DESCRIPTION:  Upgrades a database (created using a previous release of
	              Microsoft(R) Exchange Server) to the current version.
	     SYNTAX:  ESEUTIL /u <database name> /d<previous .DLL> [options]
	 PARAMETERS:  <database name>   - filename of the database to upgrade.
	             /d<previous .DLL> - pathed filename of the .DLL that came
	                                 with the release of Microsoft(R) Exchange
	                                 Server from which you're upgrading.
	   OPTIONS:  zero or more of the following switches, separated by a space:
	             /b<db> - make backup copy under the specified name
	             /t<db> - set temporary database name (default: TEMPUPGD.EDB)
	             /p     - preserve temporary database (i.e., don't instate)
	             /o     - suppress logo
	     NOTES:  1) This utility should only be used to upgrade a database
	                after an internal database format change has taken place.
	                If necessary, this will usually only coincide with the
	                release of a major, new revision of Microsoft(R)
	                Exchange Server.
	             2) Before upgrading, the database should be in a consistent
	                state. An error will be returned if otherwise.
	             3) If instating is disabled (i.e., /p), the original database
	                is preserved unchanged, and the temporary database will
	                contain the upgraded version of the database.
	
	FILE DUMP (M)
	
	FILE DUMP:
	DESCRIPTION:  Generates formatted output of various database file types.
	     SYNTAX:  ESEUTIL /m[mode-modifier] <filename> [options]
	 PARAMETERS:  [mode-modifier] - an optional letter designating the type of
	                                file dump to perform. Valid values are:
	                                h - dump database header (default)
	                                k - dump checkpoint file
	              <filename>      - name of file to dump. The type of the
	                             specified file should match the dump type
	                             being requested (e.g., if using /mh, then
	                             <filename> must be the name of a database).
	
	REPAIR (P)
	
	REPAIR:
	DESCRIPTION:  Repairs a corrupted or damaged database.
	     SYNTAX:  ESEUTIL /p <database name> [options]
	 PARAMETERS:  <database name> - filename of database to compact, or one of
	                                /ispriv, /ispub, or /ds (see NOTES below)
	  OPTIONS:  zero or more of the following switches, separated by a space:
	           /t<db>       - set temp. database name (default: REPAIR.EDB)
	           /d           - don't repair the database, just scan for errors
	           /v           - verbose output
	           /x           - give detailed error messages
	           /o           - suppress logo
	  NOTES:  1) The switches /ispriv, /ispub, and /ds use the registry
	             to automatically set the database name for the
	             appropriate Exchange store.
	          2) Recovery will not be run.
	
	NOTE: The "Upgrade" section, under "Parameters", refers to the Edb.dll from the
	Exchange 5.5 CD. To find this file, locate the Server\Setup\<Platform>
	folder on the Exchange 5.5 CD.
	
	For additional information about using ESEUTIL /U, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q196693 XADM: How To Use ESEUTIL /U to Upgrade a Database
	
	  Q259851 XADM: Ramifications of Running the ESEUTIL /P or EDBUTIL /D /R
	  Command
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
