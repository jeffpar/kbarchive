---
layout: page
title: "Q130017: How to Manage Migrated NetWare Users Accounts"
permalink: /kb/130/Q130017/
---

## Q130017: How to Manage Migrated NetWare Users Accounts

	Article: Q130017
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following procedure will help you manage migrating your NetWare accounts to
	Windows NT. The procedure requires the NetWare conversion utilities included
	with Windows NT Server version 3.5, Windows NT Resource Kit version 3.5 and
	Microsoft applications.
	
	MORE INFORMATION
	================
	
	To better manage migrating NetWare accounts, do the following:
	
	1. Migrate the user account from a Netware Server to a Windows NT Primary Domain
	  Controller (PDC) using the Migration Tool for NetWare (NWCONV.EXE).
	
	2. Use the ADDUSERS command to create a comma delimited text file of the users
	  installed on the Windows NT Server. As an example, type the following
	  command:
	
	     ADDUSERS \\<ServerName> /D USERS.CSV
	
	3. Use Microsoft Excel and the *.CSV file you created. Open the file using the
	  CSV filter provided with Excel.
	
	4. Copy the users column of the spreadsheet and paste this information to a text
	  editor such as Notepad. Save as NETWARE.BAT.
	
	5. Using an MS-DOS editor, such as EDIT.COM, open the NETWARE.BAT file.
	
	6. To help setup the user's home directory and share do the following:
	
	  a. Insert the following before the first user name:
	
	        FOR %%X IN (<Username>)
	     
	
	  b. Go to the end of that line and press delete. The next user name will move
	     up. Go to the end of the line and press delete again. The next user name
	     will move up. Continue to do this, one name at a time, and fill up the
	     line with all the users you can fit. One space is required between each
	     user. End the line with the command you wish executed for each user on
	     that line.
	
	     NOTE: The number of users you can fit on a line varies (25 is average). It
	     is important to ensure that no single line is greater than 255 characters
	     (EDIT.COM program lets you know).
	
	  c. Repeat the process for all lines. For example:
	
	           FOR %%X IN (JOHN MARY GEORGE ALICE...) DO MKDIR C:\USERS\%%X
	           FOR %%X IN (PAM JIM LAUREN MICHAL...) DO MKDIR C:\USERS\%%X
	           :
	           :
	    
	
	     NOTE: You can create as many lines as you need until each user is part of a
	     FOR statement.
	
	  d. For each line above, add the following:
	
	
	           FOR %%X IN (<Name1> <Name2>... ) DO CACLS C:\USERS\%%X /G %%X:F
	    
	
	  e. Add the following to share the USERS directory:
	
	           NET SHARE USERS=C:\USERS
	    
	
	7. Changing the user account information can be done with the NET USERS command.
	  The command is robust and takes care of the majority of the changes required.
	  To use the NET USERS command, repeat Step 6 and change the lines to read:
	
	     DO NET USERS %%X /HOMEDIR:\\<ServerName>\USERS\%%X
	
	
	  NOTE: This command adds a shared directory path to the user account in the
	  Home Directory field of the user's profile in User Manager. You can make
	  adjustments to accommodate more commands as required or repeat the process
	  for each NET USERS command you would like to apply to the user's account.
	
	8. To take advantage of the home directories, add the following command to the
	  login script (the connection is not a persistent connection):
	
	     NET USE H: /HOME
	
	
	  NOTE: The /HOME option works for both Windows NT and Windows for Workgroups
	  systems.
	
	9. Make copies of all the files that you created during the process of Step 8,
	  and save them. As you make changes to the Primary Domain Controller you may
	  wish to update these files for use with future modifications. There are many
	  options that can be set or changed for a large number of users.
	
	Example Batch File
	------------------
	
	For a group of just two users (for readability), JOHN and MARY:
	
	  FOR %%X IN (JOHN MARY) DO NET USERS %%X /ACTIVE:YES /EXPIRES:06/22/95
	  FOR %%X IN (JOHN MARY) DO MKDIR C:\USERS\%%X
	  FOR %%X IN (JOHN MARY) DO NET USERS %%X /SCRIPTPATH:LOGIN.BAT
	  NET GROUP ENGINEERING /ADD /COMMENT:"ENGINEERS"
	  FOR %%X IN (JOHN MARY) DO NET GROUP ENGINEERING %%X /ADD
	  NET SHARE USERS=C:\USERS
	  FOR %%X IN (JOHN MARY) DO NET USERS %%X /HOMEDIR:\\<ServerName>\USERS\%%X
	  FOR %%X IN (JOHN MARY) DO CACLS C:\USERS\%%X /G %%X:F
	     (NTFS Only - Sets the Users Directory permissions to Full Control)
	  CACLS C:\USERS /G EVERYONE:R
	     (NTFS Only - Sets the USERS directory to READONLY)
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt nwconv tool migration nwconvert
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
