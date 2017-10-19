---
layout: page
title: "Q146253: XCLN: How to Install a Form Created with EFD"
permalink: /kb/146/Q146253/
---

## Q146253: XCLN: How to Install a Form Created with EFD

	Article: Q146253
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install your form in a library, you can choose from several options.
	You can review the options in this table to choose where to install your form.
	
	Location              Description                Advantage
	--------              -----------                ---------
	
	Organization Forms    A public repository for    Supports anyone using
	Library               (usually Send) forms       forms who has access to
	                     located on a Microsoft     the Microsoft Exchange
	                     Exchange server.           server.
	
	Personal Forms        A private repository       Supports offline use.
	Library               for (usually Send)         Provides control by
	                     forms located on a         restricting form use to
	                     Microsoft Exchange         a limited number of
	                     server or the user's       users. Useful for
	                     computer.                  testing with a limited
	                                                group.
	
	Public Folder         A public repository for    Supports anyone using
	Library               (usually Post) forms       forms who has access to
	                     associated with a          the Microsoft Exchange
	                     folder, located on a       server and with
	                     Microsoft Exchange         permissions in the
	                     server.                    folder.
	
	Personal Folder       A private repository       Supports distribution
	Registry in a Set     for Post forms located     of forms using a set of
	of Personal           on a Microsoft Exchange    personal folders. You
	Folders               server or the user's       can save the set as a
	                     hard drive.                .PST file, and
	                                                distribute it using a
	                                                floppy disk, or network
	                                                drive. Useful for
	                                                testing Post forms.
	
	MORE INFORMATION
	================
	
	To install a form in a library
	------------------------------
	
	1. From the Main window, do one of the following:
	
	   - From the Main window File menu, choose Install.
	
	     -or-
	
	   - In the Main window toolbar, choose Install button.
	
	The installation program creates a unique directory for the form project, and
	compiles the form .EFP file into Microsoft Visual Basic files in that directory.
	This may take a few minutes depending upon the complexity of your form. When the
	compile is complete, the Set Library To dialog box appears.
	
	2. From the Set Library To dialog box, choose a library for your form.
	
	  To install a form to      Select
	  ---------------------------------------------------------------------
	
	  The Organization          The Form Library option, and
	  Forms Library             select Organization Forms Library in
	                            the Form Library box.
	
	  A Personal Forms          The Form Library option, and
	  Library                   select Personal Forms Library in the
	                            Form Library box.
	
	  A Folder Library          Folder Library, and select the
	                            folder you want to install the form.
	
	3. Select the OK button.
	
	IMPORTANT NOTE: When you reinstall a form that you have modified, close the old
	version of the form running on your computer before you reinstall the new
	version.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
