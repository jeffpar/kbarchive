---
layout: page
title: "Q200567: Answer File Parameters for WinNT 4.0 System Preparation Tool"
permalink: kb/200/Q200567/
---

## Q200567: Answer File Parameters for WinNT 4.0 System Preparation Tool

	Article: Q200567
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The System Preparation Tool (Sysprep) for Windows NT 4.0 prepares the Windows NT
	system for duplication. Upon placing the duplicated hard drives in the target
	computers and turning on the systems, a mini-setup wizard will run that will let
	you change or enter user specific information. This information includes items
	such as ComputerName, Username, and other items. There may be situations where
	automation of this wizard may be desired so answer file parameters for
	mini-wizard have been created.
	
	To automate the mini-setup wizard for the System Preparation Tool, create a text
	file with the parameters supplied in the next section, and place it in the same
	directory as the Sysprep files. On a command line, type the following command:
	
	  "Sysprep %answer-file% %optional parameters" (without the quotation marks)
	
	Optional paramters for the sysprep tool are as follows:
	
	-defeat = Bypasses the Compliance checking for Select and OEM media. This switch
	is to be used when the image is built using Non-Select or OEM media. Use this
	switch if you receive the following error message:
	
	  The use of this tool is prohibited on this product.
	
	NOTE: Although the "-defeat" switch can be used when installing the retail
	version, a Select or Open agreement with Microsoft is still required to use the
	Sysprep.exe tool.
	
	-reboot = Automatically restarts the system after Sysprep.exe has run.
	
	-quiet = Suppresses any prompts that Sysprep.exe might cause.
	
	NOTE: This switch does not effect the execution of the mini-setup wizard.
	
	-NoSidgen = Does not run-generate a unique SID on the box. Useful where install
	has been performed manually on each system but mini-wizard interaction is
	wanted.
	
	MORE INFORMATION
	================
	
	Supported Answer file Parameters
	--------------------------------
	
	  OemSkipEula
	  Value: YES | NO
	  This key disables the display of the end user license agreement (EULA) when
	  set to YES. Default is NO.
	
	  ProductID
	  Value: xxx-xxxxxxx
	  Specifies whether the ProductID screen should be displayed or not. By default,
	  the Product ID key is displayed.
	
	
	  FullName
	  Value: <string>
	  Used to specify the name of the user. If not specified or the string is empty,
	  the "User name and Organization" page will be displayed.
	
	  OrgName
	  Value: <string>
	  This key specifies the organization or company name of the user. If not
	  specified or the string is empty, the "User name and Organization" page will
	  be displayed unless the FullName key has been specified with a valid string.
	
	  ComputerName
	  Value: <string> | "Auto"
	  This key specifies the computer name. If it is not specified or is an empty
	  string, the "Computer Name" page is displayed. The string must be a minimum
	  of 1 non-white space character and a maximum of 15 non-white space
	  characters.
	
	  If this value is set to "Auto", setup will auto-generate a unique computer
	  name based on a random number. This provides a mechanism to install multiple
	  computers each having a unique computer name.
	
	  AdminPassword
	  Value: <string>
	  This key specifies the password for the Administrator account. If it not
	  specified or is empty, the "Administrator Password" page is displayed. The
	  string must be a minimum of 1 non-white space character and a maximum of 15
	  non-white space characters. To specify a blank or NULL password, use "*".
	
	  OEMBannerText
	  Values: <text string>
	  This key specifies a string to be displayed in the upper left corner of the
	  computer screen. The text must contain the "Windows NT" sub-string or else it
	  will be ignored. Multiple lines can be specified by using the * character as
	  a separator.
	
	  OEMLogoBitmapFile
	  Values: <file name> [, <resource id>]
	  This key specifies a bitmap to be displayed in the upper right corner of the
	  screen. If this line has only one field, it is assumed to be a .bmp file
	  located in the directory where the System Preparation tool resides. However,
	  if two fields are specified, the first field is the name of a DLL and the
	  second is a base 10 number that represents the resource ID of the bitmap in
	  the DLL. The DLL specified should be located in the directory that contains
	  Sysprep.exe.
	
	  OEMBackgroundBitmapFile
	  Values: file name [,<resource id>]
	  This key specifies a background bitmap to be displayed. If this line has only
	  one field, it is assumed to a be .bmp file located in the directory where
	  Sysprep.exe resides. However, if two fields are specified, the first field is
	  the name of a DLL and the second is a base 10 number that represents the
	  resource ID of the bitmap in the DLL. The DLL specified should be located in
	  the directory that contains Sysprep.exe.
	
	  OEMSkipWelcome
	  Values: 0 | 1
	  If this key is set to 1, the Welcome page is skipped. If the key is set to 0,
	  the Welcome page is displayed.
	
	  OEMNoWaitAfterGUIMode
	  Values: 0 | 1
	  If this key is set to 1, then, when the wizard is finished, the computer
	  automatically restarts and the Finished Page of the wizard is not displayed.
	  If the key is set to 0, the Finished page of the wizard is displayed and the
	  computer does not automatically restart.
	
	  NoSidGen
	  Value: YES | NO
	  NOTE: This key must not be used if you plan to duplicate the system.
	
	To automate Sysprep, create a text file that has the following header as the
	first line.
	
	  [NT4Preinstall]
	
	NOTE: This line must exist or the mini-wizard will ignore the answer file
	parameters.
	
	Enter any of the above parameters and save the file using any name. When running
	Sysprep, refer to the answer file using the following command:
	
	Sysprep.exe %answerfile%.txt <other optional params>
	
	The following is an example of a correctly formatted answer file for use with the
	System Preparation Tool.
	
	Sample Answer File:
	
	  [NT4Preinstall]
	
	  OemSkipEula=yes
	  ProductID=111-1111111
	  FullName="Your Name"
	  Orgname="Your Company"
	  ComputerName="Computer"
	  AdminPassword="password"
	  OembannerText="Banner Text Goes Here"
	  OEMLogoBitmapFile="logo.bmp"
	  OEMBackgroundBitmapFile="backgrnd.bmp"
	  OemSkipWelcome=1
	  OemNoWaitAfterGuiMode=1
	  NoSidGen=No
	
	
	REFERENCES
	==========
	
	For more information, please consult the Sysprep.doc that was supplied with the
	utility. For information on obtaining this tool or other information about
	Sysprep, please try one of the following:
	
	- Send an e-mail request to: winreq@microsoft.com. Include "Microsoft Deploy
	  Tool License Agreement Request" in the subject line.
	
	- Send a fax request to: "Microsoft Deploy Tool License Agreement Request" at
	  (206) 285-4403.
	
	- Leave voice mail with your request by calling 1-800-394-9621 in the U.S. and
	  Canada or 001-1-206-378-5544 outside of the U.S. and Canada.
	
	Additional query words: Sysprep Cloning Sysclone
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
