---
layout: page
title: "Q152013: Automating AFTP Commands Through a Script File"
permalink: /kb/152/Q152013/
---

## Q152013: Automating AFTP Commands Through a Script File

	Article: Q152013
	Product(s): Microsoft SNA Server
	Version(s): 2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft SNA Server 2.11 includes support for the APPC File Transfer Protocol
	(AFTP), which implements FTP-like commands over an LU6.2 session, as defined by
	IBM. The SNA Server 2.11 readme file includes information on how to automate the
	use of AFTP commands by passing an inputfile (attached below).
	
	However, if an AFTP command is invoked from a batch (BAT or CMD) file and the
	command fails, no ERRORLEVEL value is returned, so batch file error recovery is
	not possible.
	
	
	MORE INFORMATION
	================
	
	The following information is included in the SNA Server 2.11 readme file, which
	describes how to automate the use of AFTP.
	
	-------------------------------------------------------------------------
	
	D.13. Automating AFTP client sessions
	
	You can supply a script file to the AFTP client that contains commands for the
	AFTP client to carry out. The syntax of the AFTP command when used in this
	manner is:
	
	aftp -f inputfile
	
	where inputfile is the name of the script file.
	
	When the AFTP client is invoked using the -f command-line parameter, it executes
	each line in the specified script as a command and then terminates when it
	reaches the end of the file.
	
	For example, a file named Input.txt contains the following lines:
	
	open aftprrr
	steved
	pword
	ascii
	get file1.txt
	close
	
	The command aftp -f input.txt would do the following:
	
	1. Connect to a remote LU named aftprrr.
	
	2. Log on with the user name steved and the password pword.
	
	3. Select ASCII transfer mode.
	
	4. Download a file named FILE1.TXT.
	
	5. Close the connection.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211NTSP1
	Version           : :2.11 SP1
	
	=============================================================================
	
