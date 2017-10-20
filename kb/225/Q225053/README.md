---
layout: page
title: "Q225053: Microsoft Windows 95 Year 2000 Update Readme File"
permalink: /kb/225/Q225053/
---

## Q225053: Microsoft Windows 95 Year 2000 Update Readme File

{% raw %}

	Article: Q225053
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kbreadme win95
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Y2Kw95.txt file included
	in the Microsoft Windows 95 Year 2000 Update.
	
	MORE INFORMATION
	================
	
	
	=====================================================================
	                       Microsoft Windows 95 
	                   Year 2000 Update README File
	                        March 1999
	=====================================================================
	
	(c) Copyright Microsoft Corporation, 1999
	
	Year 2000 Readiness Disclosure
	
	This document provides complementary information to supplement the 
	Microsoft Windows 95 documentation.
	
	The Windows 95 Year 2000 Update provides Windows 95 updates to resolve 
	known year 2000 issues with the Windows 95 operating systems. 
	
	For current year 2000 information regarding Microsoft products, visit 
	the Microsoft Web site at http://www.microsoft.com/year2000 or call 
	1-888-MSFT-Y2K or contact your local Microsoft subsidiary. 
	Such information is generally available to all Microsoft customers 
	for the sole purpose of assisting the planning for the transition to 
	the year 2000. This document contains the information currently 
	available concerning the date-handling behavior of Microsoft's products 
	and is subject to change, at any time, without notice. We therefore 
	recommend that you continue to check the information on the Microsoft 
	Year 2000 Web site regularly for any such changes.
	
	NOTE: For the best readability, maximize the Notepad window. 
	
	To print this file, open it in Notepad or another word processing 
	program, and then click Print on the File menu.
	
	======================================
	CONTENTS
	======================================
	I.	Installation Notes
	    	A. System Requirements
	    	B. This Year 2000 Update is for Windows 95 only
	    	C. Before You Install the Windows 95 Year 2000 Update
	       D. Anti-virus software and Installing the Year 2000 Update
	
	II.	Installation Instructions
	    	A. Downloading and Extracting the Windows 95 Year 2000 Update
		B. Advanced Installation Options
		C. Additional Installation Options for Administrators
	       D. Create a new Windows 95 Startup Disk
	
	III.	Release Notes
	    	A. If You Reinstall Windows 95
		B. Windows 95 Startup Disk
	       C. Changes to Network Settings
	
	IV. 	What Are the Year 2000 Issues in Windows 95?
	
	V. 	Updating Microsoft Internet Explorer 4.0x
	
	VI.   	Additional Issues
		A. Microsoft Jet Database Engine 3.0 and Microsoft OFFICE 95
	
	VII.  	Microsoft Technical Support
	
	=======================================
	
	I. 	Installation Notes
	---------------------------------------
	
	A. System Requirements
	   You need 10 MB free disk space to install the Windows 95 
	   Year 2000 Update. The Installation of Internet Explorer Service pack 
	   2 (not necessary for all systems), if selected, will require     approximately 80 MB free disk space.
	
	B. This Year 2000 Update is for Windows 95 only 
	   This Update is not intended for use on and will not install on 
	   computers running Windows 98, Windows NT, or Windows 2000. For 
	   international versions of Windows 95, download and install the 
	   appropriate language version for your location.
	
	C. Before You Install the Windows 95 Year 2000 Update 
	   Because the Windows 95 Year 2000 Update updates your system files 
	   and requires you to restart your computer during installation, you 
	   should save and close all open documents and close all programs 
	   before installing the Update.
	
	D. Anti-virus software and Installing the Year 2000 Update
	   Because the Windows 95 Year 2000 Update updates some system files it 
	   is recommended that you disable any anti-virus software that is 
	   running. If you chose not to disable this software please accept the 
	   changes made to the Command.com file when prompted by the anti-virus 
	   software during installation of the Update or after restarting your 
	   machine. 
	
	II.	Installation Instructions
	---------------------------------------
	A. Downloading and Extracting the Windows 95 Year 2000 Update
	   If you download the update from the Web site, be sure to read the 
	   release notes completely before you extract and install the 
	   Windows 95 Year 2000 Update. 
	
	   After you download the Update, a compressed executable file 
	   named W95y2k.exe appears on your hard drive. This executable 
	   file contains the files you need to update your Windows 95 system 
	   for the year 2000.
	
	  To extract the file and install the year 2000 updates:
	   1. Locate the W95y2k.exe file on your hard drive with 
	      Windows Explorer
	   2. Double click the file.
	   3. Follow the instructions that appear on your screen.
	
	B. Advanced Installation Options
	   There are several installation options available to advanced users 
	   when installing the Windows 95 Year 2000 Update. You can view these 
	   options at any time by clicking Start, clicking Run, typing 
	   W95y2k.exe /? and then clicking OK.
	
	   To use the optional installation parameters below, type
	   W95y2k.exe <option>
	
	   /Q - Quiet mode (skips all user prompts) - Useful for silent 
	           installations in batch setups.
	   /T: <full path> - Specifies a temporary working folder.
	   /C - Extract files only to the folder when used also with /T - 
	           Allows an administrator to download files into a specified 
	           location.
	   /C: <cmd> - Override install command defined by author (see below)
	
	C. Additional Installation Options for Administrators
	   System Administrators or Advanced users may want to simplify the 
	   process of rolling out this Year 2000 Update by utilizing the 
	   following options.
	
	The syntax for the following options is:
	   
	   W95y2k.exe /C:"y2ksetup <option>" 
	   Note: you must include the quotes as indicated.
	
	  /ii - Ignore Internet Explorer version, and only install core year 
	        2000 files
	  /ai - Always launch Internet Explorer 4.01 Service Pack 2 setup, and
	        run silently
	  /nr - Never reboot, without prompting.
	  /ar - Always reboot, without prompting.
	
	D. Create a new Windows 95 Startup Disk
	   After the installation of the Windows 95 Year 2000 Update you 
	   should create a new Emergency Startup Disk that will reflect the 
	   changes made. 
	
	   1. Insert original startup disk in Drive A 
	   2. Click on Start / Programs / MS-DOS Prompt 
	   3. Type "Sys a:" without the quotes (you will receive a message 
	      stating system transferred when process is complete).
	
	   If you do not have a startup disk, do the following: 
	   1. Insert blank floppy into Drive A. 
	   2. Click on Start / Settings / Control Panel.
	   3. Double-click Add/Remove Programs
	   4. Click on the Startup Disk tab 
	   5. Click Create Disk... 
	
	III. 	Release Notes
	---------------------------------------
	
	A. If You Reinstall Windows 95
	   If you have to reinstall the Windows 95 operating system, you will 
	   lose the benefits of the Windows 95 Year 2000 Update installation. 
	   Any time you have to reinstall Windows 95, run the Windows 95 Year 
	   2000 Update installation again.
	
	B. Windows 95 Startup Disk
	   Follow the instructions above in section II to create a new Startup 
	   Disk (also called Emergency Boot Disk) after installing the Year 
	   2000 Update.
	  
	   If you do not update your Startup Disk, using it to replace the boot 
	   files on your system (using the SYS command) will install a version 
	   of the system file Command.com which has not been updated for year 
	   2000. You can run the Windows 95 Year 2000 Update again to install 
	   the correct version of Command.com on your system. 
	
	C. Changes to Network Settings
	   This update installs a new year 2000-ready version of the file vdhcp.386. 
	   This network system file will be overwritten by an older version from your 
	   Windows 95 CD or disks if you make changes to your networking settings. 
	   For instance, if you install a new network adaptor, setup an online service, 
	   or make changes in Control Panel\Network, your original version of 
	   vdhcp.386 will be copied to your system.
	   If this occurs, run the Windows 95 Year 2000 Update again to install the 
	   correct version of vdhcp.386.   
	
	IV. 	What Are the Year 2000 Issues in Windows 95? 
	-------------------------------------------------
	
	The issues listed below are resolved by installing this Update.
	
	1.  Find "File or Folders" Dialog (shell32.dll)
	    The Date tab in Find "File or Folders" dialog displays the year 
	    in YY format. This format results in incorrect displays for years 
	    greater than 2000. For example, entering 03/20/2003 will 
	    incorrectly display 03/20/C3. However this does not effect the 
	    search. When searching for files changed within a certain date 
	    range, enter a 2-digit or 4-digit date and the search will be 
	    performed based on the dates entered. This file will be updated 
	    only if you are running Windows 95 version 950 or 950a. This 
	    issue does not exist in later Windows 95 versions.
	
	2.  Windows File Manager (winfile.exe) 
	    Windows File Manager does not display or sort dates beyond the 
	    year 2000 correctly. When using Windows File Manager to view the 
	    contents of folders, and you have selected to view "all file 
	    details", the dates of files created in the year 2000 and beyond 
	    may appear as follows:
	
	    January 1st, 2000 would appear as 1/1/;1
	
	    February 3rd, 2023 would appear as 2/3/>3
	
	    March 5th, 2036 would appear as 3/5/=6
	
	3.  Command Interpreter (command.com)
	    The DATE command (internal to COMMAND.COM) does not 
	    correctly handle 2-digit dates from 00-79. Entering 2-digit dates 
	    within this range returns the error "Invalid Date".
	
	4.  Date/Time Picker (comctl32.dll). 
	    Previously, when you set your Regional Settings in the Control 
	    Panel to handle years as two digits, the Date/Time Picker function 
	    did not correctly reflect the date.  This update addresses that 
	    issue.
	
	5.  Phone Dialer applet (dialer.exe)
	    The Show View Call Log option doesn't display the date properly 
	    after successful completion of a telephone call. If the system 
	    date is adjusted to the year 2000, the date is displayed as 100,
	    101,102, and so on. 
	
	    For example, in the year 2000, you make a call using the Dialer 
	    applet. The log file created or appended to after the completion 
	    of the phone connection displays the year portion of the call date 
	    incorrectly, such as 101, 102, 103, and so on.
	
	6.  Time and Date Control Panel applet  (timedate.cpl)
	    When you select the date February 29 and change the year using the 
	    up and down arrows in the Date/Time Properties dialog box, the 
	    calendar displays February 29 every year, whether it's a leap year 
	    or not. This is a display issue in the applet.
	
	7.  DHCP Virtual Driver (vdhcp.386)
	    Winipcfg /all - IP Leases obtained on or after 3/01/2000 are 
	    reported as being obtained the previous day. The system date is 
	    displayed properly but the DHCP client reports a date one day 
	    prior. 
	
	    For example, if you log on to a LAN after March 1, 2000, and you 
	    run Winipcfg /all from Start\Run or Ipconfig /all from a DOS VM, 
	    the lease obtained date is one day behind. After 2/28/2000, the 
	    lease obtained date is one day behind the expected date.
	
	8.  Microsoft Foundation Class Library file (mfc40.dll)
	    After the year 2000, programs that use the built in operators of 
	    the COleDateTime class may incorrectly parse a date . For example, 
	    02/05/2000 may display as 2/05/100. Microsoft has modified the 
	    COleDateTime class so that it is less sensitive to program 
	    assumptions.
	
	9.  DOS Xcopy (xcopy.exe, xcopy32.exe)
	    When using xcopy in real mode with the optional parameter /D:date, 
	    xcopy does not accept years entered as two digits, except for the 
	    years 80 through 99. The message "Invalid date" is displayed. When
	    using xcopy in protected mode (from within Windows) two-digit 
	    dates are accepted but are recognized as being within the 20th 
	    century (02/05/01 is seen as 02/05/1901).
	
	10. Microsoft Run Time Library file (msvcrt40.dll) 
	    Some applications that utilize this runtime library may behave 
	    as if the current time is one hour earlier than the correct time 
	    shown on the Windows clock. The problem will continue for one 
	    week from April 1 through April 8, 2001, after which these 
	    applications will shift to daylight savings time and again be in 
	    sync with the operating system. The problem results from the fact 
	    that April 1, 2001, falls on a Sunday, which confused a small 
	    algorithm in the run time library file that checks for the start 
	    of daylight savings time.This is not a year 2000 issue but rather 
	    a daylight savings time issue. It could occur in the years 1973, 
	    1979, 1984, 1990, 2001, 2007, 2012, 2018, 2029, and 2035. What is 
	    common about these years is that April 1st falls on a Sunday.
	
	11. OLE AUTOMATION (oleaut32.dll, olepro32.dll, stdole2.tlb, asycfilt.dll) 
	    The Microsoft Automation library contains routines for interpreting 
	    two digit years and provides a convenient way for applications to 
	    create unambiguous (serial) dates. In Windows 95 the current two 
	    digit year cutoff is 1999. This means that two digit years beginning 
	    with 00 will be interpreted as being in the 20th century, i.e. 1/1/00 
	    is converted to 1/1/1900
	
	
	V.	Updating Microsoft Internet Explorer
	------------------------------------------------------------
	
	Windows 95 Year 2000 Update will check your system for Microsoft 
	Internet Explorer.  If a version of Internet Explorer prior to version 
	4.01 Service Pack 2 is detected you will see a message explaining that it 
	is necessary to install Internet Explorer 4.01 Service Pack 2 to correct 
	several minor year 2000 issues. If you are already using Internet Explorer 
	version 4.01 Service Pack 2 or a later version of Internet Explorer, or if 
	you do not use Microsoft Internet Explorer as your browser, the Internet 
	Explorer components below do not need to be updated. 
	For more information about Microsoft Internet Explorer and year 2000 go to
	http:www.microsoft.com/ie 
	
	Note: The download time for Internet Explorer 4.01 Service Pack 2 can be 
	about 2 hours for a Standard installation, depending on the speed of your 
	Internet connection.
	
	If you are using a version of Internet Explorer prior to 4.01 Service 
	Pack 2 the issues listed below are corrected by installing this Update.
	
	For Internet Explorer 4.0X the following issues are addressed:
	
	1. Microsoft Virtual Machine
	   Year 2000 issues have been reported in connection with Java 
	   virtual machines based on the Sun Microsystems Java Development 
	   Kit versions 1.1.1 through 1.1.5. Applications written in Java 
	   that make use of the java.txt.SimpleDateFormat class library may 
	   handle 4-digit dates incorrectly.
	
	   For example, if you have a Java applet or application that uses 
	   SimpleDateFormat and you enter four digits for the year, the date 
	   functions may truncate the year and use only the first two digits 
	   (for example, 2000 might become 20).
	
	2. Microsoft Wallet (actpmnt.ocx)
	   When entering credit card information in versions of Microsoft 
	   Wallet earlier than version 2.1.1383, you must enter the month, 
	   day, and year for expiration dates beyond the year 2000. Otherwise, 
	   information may not be handled as expected. 
	
	   For example, entering a credit card with an expiration date of 
	   1/01 is handled as January 1 of the current year. This behavior 
	   was changed in Microsoft Wallet version 2.1.1383 and later.  
	
	3. Microsoft Data Access (msdadc.dll, msadce.dll)
	   The msdadc.dll file is part of the OLE DB core components and a 
	   part of the Microsoft Data Access Components (MDAC). If you code 
	   to ADO, and your ADO Recordset includes Date data types, such as 
	   adDate, adDBDate, adFileTime, or adDBTimeStamp, and you're using 
	   a date format in which periods are used instead of slashes for 
	   date separator (for example, 01.01.98 instead of 01/01/98), and 
	   you specify a year less than 60, then Data Convert (msdadc.dll) 
	   might translate your date as a time. 
	   For example, 01.01.01 (January 1, 2001) might be converted to 
	   01:01:01 (December 30, 1899, 1:01:01A.M.).
	
	   For more information about OLE DB compliance, visit the Microsoft 
	   Web site at http://www.microsoft.com/year2000.
	
	   1. Click Product Guide.
	   2. In Compliance Information for Microsoft Products, select 
	      Microsoft OLE DB. Under Data Access, select Microsoft OLE DB.
	   3. Click Search, and the latest compliance documentation will be 
	      displayed.
	
	For Internet Explorer 3.0x the following issues are addressed:
	
	1. If a web site uses a cookie with a 2-digit year of "00", Internet 
	   Explorer recognized the cookie as expired. Cookies with 4-digit 
	   expiration dates, or expiration dates before and after the year 
	   2000 are not affected. 
	
	2. If a web server communicates a 2-digit year of "00" in its HTTP/1.0 
	   header, Internet Explorer will recognize pages on that site as 
	   expired and not cache them locally. Browsing of the site will work 
	   normally while connected, but will not be available for offline 
	   browsing. HTTP/1.1 headers, headers with a 4-digit year, or headers 
	   containing 2-digit years before and after the year 2000 are not 
	   affected. 
	
	3. If you change your control panel settings (International -> Use 
	   Century format (1990 vs 90)) and browse to an FTP server with files 
	   created in 2000 (according to the server), IE will display the files 
	   as created in 1900. 
	
	4. The Javascript getYear() function/method calculates the year "00" 
	   (2000) as "100", and the year "01" (2001) as "101" etc. Scripts 
	   will need modifications to work around this issue. 
	
	1. The date function (java.util.date) in the Microsoft VM based on Sun 
	   Microsystems Java Development Kit 1.0.2 does not interpret two digit 
	   dates correctly. The function maps a two-digit date to the 1900s and 
	   doesn't take into consideration the year 2000.
	
	Note:
	During the setup of Internet Explorer 4.01 Service Pack 2, if you choose 
	the Installation Option "Browser Only Installation" rather than the 
	default "Standard Installation", the updated files that correct the above 
	year 2000 issues will not be installed. The "Browser Only Installation" 
	will install only a subset of the entire Internet Explorer Service Pack 
	and will not update your system for the above year 2000 issues. You 
	should choose either the default Installation Option of "Standard 
	Installation" or choose "Full Installation" to ensure that all updated 
	files and Internet Explorer 4.01 Service Pack 2 components are installed 
	on your system.
	
	
	VI. 	Additional Issues
	-------------------------------------
	A. Microsoft Jet Database Engine 3.0 and Microsoft OFFICE 95
	   When you try to synchronize two members of a replica set that was 
	   created before the year 2000, and the current date on your computer 
	   is after the year 2000, a synchronization message might appear. This 
	   is because of how the expression service mishandles date entries in 
	   the MSysExchangeLog table in replicas. When a replica set created 
	   before the year 2000 is compacted after the year 2000, exchange 
	   information relating to synchronizations after the year 2000 is 
	   deleted from the MSysExchangeLog table. After this information is 
	   deleted, the generation information in the MSysExchangeLog table and 
	   the MSysGenHistory table does not match, and the replicas cannot be 
	   synchronized. To resolve this issue, download the latest Microsoft 
	   Office 95 Service Release from the Microsoft Web site at 
	   http://office.microsoft.com. 
	
	       
	
	VII. 	Microsoft Product Support Services
	-------------------------------------
	
	Technical support for this component is provided in the United States 
	and Canada by calling (425) 635-7000, 6:00 A.M. to 6:00 P.M., 
	Pacific Time, Monday through Friday, excluding holidays. For help after 
	hours, visit the Options topic at http://www.microsoft.com/support. 
	For customers using text telephone (TDD/TTY), technical support for 
	this component is available by dialing (425) 635-4948 in the 
	United States and Canada, 6:00 A.M. to 6:00 P.M., Pacific Time, Monday 
	through Friday, excluding holidays. For support information outside the 
	United States and Canada, contact your local subsidiary. Phone numbers 
	for Microsoft Subsidiaries are subject to change. For the most recent 
	listing, see the Support Online Web site at 
	http://support.microsoft.com/support. If there is no Microsoft 
	subsidiary office in your country, contact the vendor from which you 
	purchased your Microsoft product. Microsoft's support services are 
	subject to Microsoft's then-current prices, terms, and conditions, 
	which are subject to change without notice. 
	
	THE INFORMATION CONTAINED IN THIS DOCUMENT IS 
	PROVIDED TO YOU FOR THE SOLE PURPOSE OF ASSISTING 
	THE PLANNING FOR THE TRANSITION TO THE YEAR 2000. 
	THIS DOCUMENT CONTAINS THE INFORMATION CURRENTLY 
	AVAILABLE CONCERNING THE BEHAVIOR OF MICROSOFT'S 
	PRODUCTS IN THE NEXT CENTURY AND IS UPDATED 
	REGULARLY AND SUBJECT TO CHANGE. WE THEREFORE 
	RECOMMEND THAT YOU CONTINUE TO CHECK THE 
	INFORMATION LOCATED AT http://microsoft.com/year2000 
	REGULARLY FOR ANY CHANGES. CONSQUENTLY, THE 
	INFORMATION IN THIS DOCUMENT IS PROVIDED "AS IS" 
	WITHOUT WARRANTY OF ANY KIND. MICROSOFT DISCLAIMS 
	ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING 
	THE WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
	A PARTICULAR PURPOSE. IN NO EVENT SHALL MICROSOFT 
	CORPORATION OR ITS SUPPLIERS BE LIABLE FOR ANY DAMAGES 
	WHATSOEVER INCLUDING DIRECT, INDIRECT, INCIDENTAL, 
	CONSEQUENTIAL, LOSS OF BUSINESS PROFITS, PUNITIVE OR 
	SPECIAL DAMAGES, EVEN IF MICROSOFT CORPORATION OR 
	ITS SUPPLIERS HAVE BEEN ADVISED OF THE POSSIBILITY OF 
	SUCH DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION 
	OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR 
	INCIDENTAL DAMAGES SO THE FOREGOING LIMITATION MAY 
	NOT APPLY. THE INFORMATION IN THIS DOCUMENT IS INTENDED 
	TO BE READ IN CONJUNCTION WITH OTHER INFORMATION 
	LOCATED AT http://microsoft.com/year2000, INCLUDING BUT NOT 
	LIMITED TO THE DEFINITION OF THE VARIOUS COMPLIANCE 
	RATINGS AND MICROSOFT'S YEAR 2000 TESTING PRACTICES.  
	TO THE EXTENT THE INFORMATION CONTAINED IN THIS 
	DOCUMENT CONFLICTS WITH THE INFORMATION LOCATED 
	AT http://microsoft.com/year2000, THE INFORMATION LOCATED AT 
	http://microsoft.com/year2000 SHOULD BE CONSIDERED MORE UP 
	TO DATE. 
	
	ANY STATEMENTS MADE TO YOU BY MICROSOFT OR CONTAINED 
	HEREIN IN THE COURSE OF PROVIDING YEAR 2000 RELATED FIXES, 
	YEAR 2000 DIAGNOSTIC TOOLS, OR REMEDIATION SERVICES (IF ANY) 
	ARE SUBJECT TO THE YEAR 2000 INFORMATION AND READINESS 
	DISCLOSURE ACT (112 STAT. 2386). IN CASE OF A DISPUTE, THIS ACT 
	MAY REDUCE YOUR LEGAL RIGHTS REGARDING THE USE OF ANY 
	SUCH STATEMENTS, UNLESS OTHERWISE SPECIFIED BY YOUR 
	CONTRACT OR TARIFF.<BR/>
	
	Additional query words: y2k year 2000
	
	======================================================================
	Keywords          : kbreadme win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :1.0,2.0,2.1,2.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
