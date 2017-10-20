---
layout: page
title: "Q130704: PC Win: &quot;Remember Password&quot; Option of WFW Mail Client"
permalink: /kb/130/Q130704/
---

## Q130704: PC Win: &quot;Remember Password&quot; Option of WFW Mail Client

{% raw %}

	Article: Q130704
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	***************************************************************
	**                          - WARNING -                      **
	**    THE MIXING OF WFW and MSMAIL 3.2 DLL's HAS NOT BEEN    **
	**    CONFIRMED, EDITED OR TESTED BY MICROSOFT.  USE ONLY    **
	**    WITH DISCRETION.                                       **
	***************************************************************
	
	SYMPTOMS
	========
	
	In Windows for Workgroups Mail, when you select the menu Mail and change
	password, a dialog box is displayed with a check box "remember password". This
	article describes this feature and its usage.
	
	On changing the password and checking this box, you are not prompted for your
	password in subsequent sessions. However, after doing this if you change your
	mind and want to be prompted to enter the password on loading mail, how do you
	revert back ?
	
	If you try changing the password and leave the box clear (not selected), on
	loading mail the following error message appears:
	
	  Mailbox name or password is incorrect
	
	On pressing enter, the 'sign in' dialog box is displayed and the password field
	displays asterisks denoting the length of the previous password.
	
	MORE INFORMATION
	================
	
	To resolve this issue it is important to understand that the 'Remember Password'
	option is actually a MS Windows for Workgroups feature that is not provided with
	the MS Mail 3.2 Windows Client.
	
	But if you are using the MS Mail 3.2 Windows Client in the MS Windows for
	Workgroups environment, then you will have this option available if the WFWG
	mail components are in use. Specifically, the WFWG version of the MSSFS.DLL file
	has been enhanced to tie into the WFWG password caching scheme.
	
	Here are four procedures that may be used to resolve this issue:
	
	1. Replace the WFWG MSSFS.DLL with the Mail 3.2 MSSFS.DLL
	
	2. Delete the user's password caching file <username>.PWL
	
	3. Use the WFWG 3.11 Resource Kit Password List Editor to edit the PWL file and
	  remove the cached password for Mail.
	
	4. Write a null password for Mail in the PWL file.
	
	Here are the procedures in more detail:
	
	1. If the MS Mail 3.2 Windows Client is being used in the MS Windows for
	  Workgroups environment and the 'Remember Password' option is not desired the
	  WFWG version of MSSFS.DLL (c:\windows\system\mssfs.dll dated 11/1/93) can be
	  replaced with the MS Mail 3.2 Windows Client version of the MSSFS.DLL file.
	  The 'Remember Password' option will no longer appear in the logon dialog or
	  the change password dialog in the MS Mail 3.2 Client.
	
	2. MS Windows for Workgroups caching scheme stores passwords in a file on the
	  hard disk. The naming convention for the file is <username>.pwl and the
	  file is typically stored in the c:\windows directory. If this file is removed
	  from the hard disk the user will be prompted for a password when attempting
	  to access any resources using passwords that were previously cached in the
	  PWL file. If the user desires to continue caching passwords with some
	  resources, then the user will need to provide the password when connecting to
	  these resources and once again select the 'Remember Password' or 'Save this
	  Password in Your Password List' option to have the passwords written to a new
	  PWL file.
	
	3. The MS Windows for Workgroups 3.11 Resource Kit provides a 'Password List
	  Editor' utility that allows a network administrator or user to remove
	  password caching for specific resources contained in a PWL file. This utility
	  does not display the passwords (which are encrypted) in the file, but will
	  display specific resources (shares, mail) which can be removed from the PWL
	  file. This option enables an administrator/user to disable password caching
	  for a specific resources and does not require the user to recreate the PWL
	  file for other resources where password caching is still desired.
	
	4. If the administrator/user does not have access to the WFWG 3.11 Resource Kit
	  then a null password can be written to the PWL file for Mail and this will
	  disable password caching for Mail. The WFWG password caching feature does not
	  work with Mail when a null (blank) password is written to the PWL file. If a
	  null password is written to the PWL file (by changing the Mail password to
	  null and then selecting the 'Remember Password' option) the Sign In dialog is
	  displayed anyway. (Pressing the return key will take the user into Mail.)
	  Once this is done the user can change their password back to a non-null
	  password and not select the 'Remember Password' option. This will update the
	  MMF file to the new non-null password but leave the null password in the PWL
	  file. The result is that the user will always be prompted for a password
	  (even though a null password is still in the PWL file) until they once again
	  choose the 'Remember Password' option while using the new non- null password.
	  This procedure, like procedure number 1 and 3 above, also does not require
	  recreating the PWL file for continued caching of other resources.
	
	RESOLUTION
	==========
	
	To insure proper implementation of Microsoft Mail for PC Networks Windows Client
	on a Windows for Workgroups workstation,it is important to have the most updated
	versions of the Mail 3.2 DLL's. There is an updated SETUP.INF file available in
	WSETUP.EXE that can be download from the Microsoft FTP Web site and used to
	ensure that the correct DLLs are actually copied to the local WINDOWS and MAIL
	directories. See Q124953 for more information.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
