---
layout: page
title: "Q199323: How to Automate Specific Passwords for Existing or New Accounts"
permalink: /kb/199/Q199323/
---

## Q199323: How to Automate Specific Passwords for Existing or New Accounts

{% raw %}

	Article: Q199323
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to assign specific passwords to existing accounts or
	create new accounts and assign specific passwords to them (for example, during
	domain migration, bulk addition of new users, Novell NetWare migration, and so
	on).
	
	If user and password lists already exist, you can use the FOR command to automate
	the process. For example
	
	  For /f "tokens=1,2 delims=," %b in (<FileName>) do net user %b %c
	
	where the file reads:
	
	  ,user1,password1
	  ,user2,password2
	
	If you have a list of users in a text file but do not have a password list, the
	following QBASIC code automates the password creation process:
	
	  DECLARE FUNCTION IsDuplicated% (mPwd AS STRING)
	  DECLARE FUNCTION CreatePassword$ (mNumChar AS INTEGER)
	
	  '-- Declare variables you are using
	  Dim gNumCreated As Integer  '-- Keeps track of number of passwords created
	  Dim NumPass As Integer      '-- Number of passwords you want
	
	  Dim NumChar As Integer
	  Dim Tempstr As String
	
	  '-- Program starts
	
	  Randomize Timer
	
	  Cls
	  Print "Password Creater"
	  Print "----------------"
	  Print
	  INPUT "How many characters per password? ", NumChar
	  INPUT "How many passwords do you want to generate? ", NumPass
	  Print
	  INPUT "Press Y to continue, or any key to quit: ", Ans$
	
	  '-- Generation begins
	  If UCase$(Ans$) = "Y" Then
	
	      '-- Create a temp file to hold passwords for comparison
	      '-- Note that this file is not readable using a text editor
	      Open "~temp.txt" For Random As #1 Len = NumChar + 2
	
	      '-- Begin creating passwords up to specified numbers
	      gNumCreated = 1
	      While gNumCreated <= NumPass
	          Tempstr = CreatePassword$(NumChar)
	          '-- Continue fetching new password until not a duplicate
	          While IsDuplicated(Tempstr) = 1
	              Tempstr = CreatePassword$(NumChar)
	          Wend
	          '-- If this point is reached, Tempstr contains a unique password.
	          '-- Assign it to the Password array
	          Put #1, gNumCreated, Tempstr
	          LOCATE 10, 1: Print "Number of Password Created: "; gNumCreated
	          gNumCreated = gNumCreated + 1
	      Wend
	
	      '-- Transfer passwords stored in ~temp.txt to Password.txt 
	      '-- (which is more readable)
	      '-- ******* This is the final output file you want *******
	      Open "password.txt" For Output As #2
	      For x = 1 To NumPass
	          Get #1, x, s$
	          Print #2, s$
	      Next x
	      '-- Close all open files
	      Close
	
	      '-- Notify the user that the program is done
	      Beep
	      Print
	      Print
	      Print "Done...."
	      Print
	      Print "The passwords are stored in the Password.txt file in the current folder."
	
	  End If
	
	  Function CreatePassword$(mNumChar As Integer)
	
	      '-- Generate characters up to mNumChar
	      s$ = ""
	      For x% = 1 To mNumChar
	
	          '-- Randomly generate ASCII values
	          i% = Int(Rnd(1) * 48) + 74
	
	          '-- Exclude certain range of characters (like {!@# and etc.)
	          While (i% >= 58 And i% <= 64) Or (i% >= 91 And i% <= 96)
	              i% = Int(Rnd(1) * 48) + 74
	          Wend
	          s$ = s$ + Chr$(i%)
	      Next x%
	
	      '-- Return the created password
	      CreatePassword = s$
	
	  End Function
	
	  Function IsDuplicated%(mPwd As String)
	      '-- Loop through all the passwords already created so far
	      '-- (loop until gNumCreated - 1)
	      For x = 1 To gNumCreated - 1
	          '-- If mPwd happens to be equal to one of the passwords
	          '-- then exit out of this function and return 1
	          '-- to indicate that it is a duplicate
	          Get #1, x, s$
	          If mPwd = s$ Then
	              IsDuplicated = 1
	              Exit Function
	          End If
	      Next x
	      '-- If this point is reached mPwd is unique, so return 0
	      '-- to indicate that it is a valid password
	      IsDuplicated = 0
	
	  End Function
	
	This creates a list of randomly generated unique passwords, and places them all
	in a Password.txt file in the current folder.
	
	Within an existing domain, you can extract the domain user list using the "NET
	USER /<Domain><FileName>" command, where <Domain> is the name
	of your domain, and <FileName> is the name of the file.
	
	This lists all users in the domain and exports them to the file you specified.
	You can then merge the user list and the password list with any spreadsheet
	program. After the merged file exists, you can use the FOR command to to
	automate the process of assigning specific passwords to existing accounts.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
