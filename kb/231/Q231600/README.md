---
layout: page
title: "Q231600: How to Use the Check Free Disk Space Script Action Successfully"
permalink: /kb/231/Q231600/
---

## Q231600: How to Use the Check Free Disk Space Script Action Successfully

{% raw %}

	Article: Q231600
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 smsinst
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server Installer includes a "Check Disk Space" script item
	that verifies if there is enough free space on a specified disk drive to install
	all of the files included in an SMS Installer .exe installation. You can include
	a "Check Disk Space" script item (with no options selected) to accomplish this
	task.
	
	MORE INFORMATION
	================
	
	There is also an option to reserve additional space in the item above and beyond
	what the Systems Management Server Installer calculates the files included in
	the installation script would take.
	When you specify the following in a Check Disk Space script item, an additional
	300 megabytes of disk space is required for the installation.
	
	- Component Variable field: (leave blank)
	
	- Status Variable field: STATUS
	
	Under the Reserve Space section:
	
	- The first Disk Variable field: DESTDRIVE (where DESTDRIVE = C:)
	
	- The first Extra Space field: 307200
	
	The following two sections list the scenarios for interactive and silent
	installations:
	
	Interactive Installations
	-------------------------
	
	In an interactive installation, if there is at least 307,200 kilobytes on the
	DESTDRIVE (C:), the script continues, and the STATUS variable is set to "".
	
	If there is not, the user is presented with the following dialog box (there is no
	way to suppress this except for running the .exe with the /S switch):
	
	The software requires an additional xxx K bytes free on the C: drive to install.  Please remove any unnecessary files and try again.<BR/>
	
	The user is then presented with the option to Abort, Retry, or Ignore:
	
	- If the user chooses Abort, the installation is cancelled.
	
	- If the user chooses Ignore, the STATUS variable is set to 'I' and the
	  installation continues.
	
	- If the user chooses Retry, the STATUS variable is set to 'R' and the
	  installation continues.
	
	  NOTE: If there is no STATUS variable specified, then the Check Free Space
	  script item is repeated until the user aborts or enough space is freed to
	  perform the installation.
	
	You can use the contents of the variable STATUS with an If statement to verify
	what was chosen and customize your script accordingly.
	
	For example, if STATUS is set to R, retry the Check Free Disk Space until it
	succeeds. If STATUS is set to I, provide the user with a dialog for ignoring the
	error and then continue the installation. If STATUS is "" (there is enough
	space), proceed with the installation.
	
	Silent Installations
	--------------------
	
	In a silent Installation (using the /s switch), if there is not sufficient disk
	space calculated based on the Check Disk Space script item settings, the
	installation will be cancelled unless the "Do Not Cancel During Silent
	Installation" option is checked.
	
	
	If the Installation is not cancelled and continues on in silent mode, the STATUS
	variable is set to I. Using an IF statement, this may be used as a way to
	determine if enough disk space existed in silent mode, log the status to the
	installation log and halt silently through a script action.
	
	If there are any INSTALL FILE script items, the total of the files installed is
	added to the "Extra Space" amount specified.
	
	For example, if the script includes INSTALL FILE script items that installs
	10,000 kilobytes of files, and you have specified 307,200 in the "Extra Space"
	field, the amount required is 307,200 + 10,000. This is the free disk space
	required for the destination drive. Adjust the "Extra Space" value accordingly.
	
	If you only want to check to determine if there is enough space for the files
	installed only by the installation script, leave the "Disk Variable" and "Extra
	Space" fields blank.
	
	The following is a sample script excerpt that illustrates the scenarios discussed
	in this article:
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	  item: Set Variable
	    Variable=DESTDRIVE
	    Value=C:\ 
	  end
	  item: Set Variable
	    Variable=STATUS
	  end
	  item: Open/Close INSTALL.LOG
	    Flags=00000001
	  end
	  item: Open/Close INSTALL.LOG
	  end
	  item: Check Disk Space
	    Space1=999999
	    Variable1=DESTDRIVE
	    Space2=0
	    Space3=0
	    Status=STATUS
	    Flags=00000001
	  end
	  item: If/While Statement
	    Variable=CMDLINE
	    Value=/S
	    Flags=00000011
	  end
	  item: If/While Statement
	    Variable=CMDLINE
	    Value=/s
	    Flags=00000011
	  end
	  item: Display Message
	    Title English=STATUS
	    Text English=Status Returned from Check free disk space is: %STATUS%
	    Text English=
	    Text English=Where:
	    Text English=R = Retry
	    Text English=I = Ignore
	    Text English=
	  end
	  item: End Block
	  end
	  item: End Block
	  end
	  item: If/While Statement
	    Variable=STATUS
	    Value=I
	  end
	  item: Add Text to INSTALL.LOG
	    Text=Installation was run with following options: "%CMDLINE%", and Status Returned by Free Disk Space indicated there was not enough free disk space available: %STATUS%
	  end
	  item: End Block
	  end
	  item: Insert Line into Text File
	    Pathname=%DESTDRIVE%\FREESPAC.TXT
	    New Text=Status Returned from Free Disk Space: %STATUS%
	    Line Number=0
	  end
	
	For more information, see the Systems Management Server Installer online Help,
	Script Item Reference.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
