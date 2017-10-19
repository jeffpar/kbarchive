---
layout: page
title: "Q150648: HOWTO: Resolve Files Checked Out by an Unavailable User"
permalink: /kb/150/Q150648/
---

## Q150648: HOWTO: Resolve Files Checked Out by an Unavailable User

	Article: Q150648
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is sometimes necessary to undo the checkout of a file or files because the
	user who originally checked out the file is unavailable, either being out sick,
	having left the company, or for some other reason. By using the Admin account,
	you can undo a checkout by any other user.
	
	After logging into the Explorer as Admin, go to the project where the user has
	the file checked out and click the file. If there is more that one file checked
	out, hold the CTRL key and select multiple files, or click the project name in
	the left pane to select an entire project. Click the "Undo Checkout" button on
	the toolbar or select [SourceSafe][Undo Checkout] from the menu. SourceSafe
	alerts you with the message: "File <filename> is currently checked out by
	<user name>. Proceed Anyway?". Click "Yes" for one file, or "Yes All" for
	a group of files, to undo the checkout.
	
	The files are then in the same state, and the same revision, as when the user
	checked them out originally. No work performed by the original user is included.
	
	MORE INFORMATION
	================
	
	The method for logging in as Admin depends on the operating system on which
	SourceSafe Explorer is running. The 16-bit operating systems, Windows 3.1,
	Windows for Workgroups 3.11, etc., prompt for the user name when starting the
	Explorer unless the SSUSER environment variable has been set. The 32- bit
	operating systems, Windows 95, Windows NT, etc., log you in automatically as
	long as the machine name is set to a valid user name, and Use_Network_Name is
	set to "Yes" in the SRCSAFE.INI file. "Yes" is the Default value. In this
	situation, you can run the SourceSafe Explorer (SSEXP.EXE) with -y and the Admin
	name, such as SSEXP -yadmin. Notice that there are no spaces between the -y and
	the Admin name.
	
	NOTE: The 16-bit version of Visual SourceSafe is only applicable for versions of
	4.x of Visual SourceSafe.
	
	Step-by-Step Example
	--------------------
	
	1. Start SourceSafe Explorer as any user except Admin. Select a project, select
	  a file or files, and check them out.
	
	2. Start another version of SourceSafe Explorer using the Run command and SSEXP
	  -yadmin. This logs you in as Admin.
	
	3. Locate the project where you checked the files out as the other user, and
	  select that project.
	
	4. Ensure that a working directory is specified for the project.
	
	5. Select the file or files, and click "Undo Checkout," or select
	  [SourceSafe][Undo Checkout] from the menu.
	
	6. A dialog box appears with the message "File <filename> is currently
	  checked out by <user name>. Proceed Anyway?".
	
	7. Click "Yes" for one file, or "Yes All" for a group of files, and note that
	  the original user's checkout is undone.
	
	Additional query words: undocheckout
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbhowto
	
	=============================================================================
	
