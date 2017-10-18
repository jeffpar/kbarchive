---
layout: page
title: "Q273601: MCSE Training Kit,  Microsoftr Windowsr 2000 Active DirectoryT S"
permalink: kb/273/Q273601/
---

## Q273601: MCSE Training Kit,  Microsoftr Windowsr 2000 Active DirectoryT S

	Article: Q273601
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS MCSE Training Kit, Microsoft Windows 2000 Active Directory Services ISBN 0-7356-0999-3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book MCSE Training Kit, Microsoft Windows 2000
	Active Directory Services, ISBN 0-7356-0999-3.
	
	The following topics are covered:
	
	- Page xxii: Incorrect URL
	
	- Page xxxi: Incorrect Hardware Requirements Information
	
	- Page xxxii: Incorrect Information About CD Included With The Book
	
	- Page 12: Incorrect Illustration In Figure 1.3
	
	- Page 16: Incorrect Information About Alpha-Based System Support
	
	- Pages 93 And 95: Incorrect IP Address In Figures 4.3 And 4.4
	
	- Page 102: Incorrect Reference To Windows 2000 Workstation
	
	- Page 106: Incorrect Program For Changing Domain Mode
	
	- Page 119: "Operations Master" Should Be "Standby Operations Master"
	
	- Page 135: Forward Should Be Reverse
	
	- Page 144: IFXR Should Be IXFR
	
	- Page 168: Incorrect Screenshot
	
	- Page 185: Incorrect Information About Password Length
	
	- Page 193: Incorrect Information About Option Overriding In Table 7.8
	
	- Page 244: Incorrect Information About Changing Universal Group Scope
	
	- Page 251: Incorrect Group Scope For Enterprise Admins
	
	- Pages 251 & 252: Correction To Table 8.7's Heading
	
	- Page 252: Local User Manager Should Be Local Users And Groups
	
	- Page 252: Incorrect Reference To Windows 2000 Workstation
	
	- Page 367: Missing Machine Parameter
	
	- Page 368: Incorrect Netdom Domain Switch
	
	- Page 382: Inaccurate Information About Domain Restore
	
	- Page 417: Incorrect Information About GPO Processing Priority
	
	- Page 434: Error In Information About Publishing Applications
	
	- Pages 470, 471 and 504: Incorrect Statement About Policy Refresh Interval
	
	- Pages 571 and 586: Incorrect Statement About Policy Refresh Interval
	
	- Page 600: Typo For IXFR
	
	- Page 631: Error In Information About Publishing Applications
	
	MORE INFORMATION
	================
	
	Page xxii: Incorrect URL
	------------------------
	
	On page xxii, the first bullet in the Reference Materials section has an inactive
	URL.
	
	Change:
	"http://www.microsoft.com/windows/server/"
	
	To:
	"http://www.microsoft.com/windows2000/server/default.asp"
	
	
	Page xxxi: Incorrect Hardware Requirements Information
	------------------------------------------------------
	
	The minimum processor and memory requirements for Windows 2000 Server is a
	Pentium 133 MHz processor and 128 MB of memory.
	
	On page xxxi, under Hardware Requirements, change:
	"32-bit 166 MHz Pentium processor
	64 MB memory for networking with one to five client computers;
	128 MB minimum is recommended for most network environments"
	
	To:
	"133 MHz or higher Pentium-compatible CPU
	128 MB memory minimum"
	
	
	Page xxxii: Incorrect Information About CD Included With The Book
	-----------------------------------------------------------------
	
	On page xxxii, under the Software Requirements section, it states:
	
	"The copy of the Windows 2000 Server 120-Day Evaluation CD-ROM that is included
	in the back of this book is required to complete the procedures in this
	course."
	
	This is incorrect. The Windows 2000 Server 120-Day Evaluation CD-ROM is not
	included with this book.
	
	
	Page 12: Incorrect Illustration In Figure 1.3
	---------------------------------------------
	
	On page 12, in Figure 1.3, the illustration incorrectly shows that the
	"Environment subsystems" encompasses "Win32 subsystem", "OS/2 subsystem", and
	"Integral subsystem".
	
	There is a curved line drawn between the "Win32 subsystem" oval and the "Integral
	subsystem" oval with a label above it that reads "Environmental subsystems".
	That curved line should be between the "POSIX subsystem" oval and the "OS/2
	subsystem" oval to indicate that POSIX, Win32, and OS/2 are all environmental
	subsystems. The label "Integral subsystems", which is under the "POSIX
	subsystem" oval, should be placed at the right side of the diagram near the
	"Integral subsystem" oval.
	
	
	Page 16: Incorrect Information About Alpha-Based System Support
	---------------------------------------------------------------
	
	On page 16, under the "Hardware Abstraction Layer (HAL)" section, the last
	sentence incorrectly indicates that Alpha-based systems are supported in Windows
	2000. However, Alpha-based systems are not supported in Windows 2000 final
	release version.
	
	Change:
	"This layer allows Windows 2000 to run on both Intel-based and Alpha-based
	systems without having to maintain two separate versions of Windows 2000
	Executive."
	
	To:
	"This layer was originally designed to allow Windows 2000 to run on both
	Intel-based and Alpha-based systems without having to maintain two separate
	versions of Windows 2000 Executive. However, Alpha-based systems are not
	supported in Windows 2000 final release version."
	
	
	Pages 93 And 95: Incorrect IP Address In Figures 4.3 And 4.4
	------------------------------------------------------------
	
	On pages 93 and 95, in Figures 4.3 and 4.4, the IP addresses listed in the Public
	Internet portion of the figures are incorrect. 192.168.x.x is a reserved address
	range for private networks.
	
	Change the IP address from:
	
	"192.168.x.x"
	
	To:
	
	"192.169.x.x"
	
	
	Page 102: Incorrect Reference To Windows 2000 Workstation
	---------------------------------------------------------
	
	On page 102, in the last paragraph,
	
	Change:
	"Windows 2000 workstation"
	
	To:
	"Windows 2000 Professional"
	
	
	Page 106: Incorrect Program For Changing Domain Mode
	----------------------------------------------------
	
	On page 106, under "To change the domain mode to native mode", step 1 incorrectly
	lists Active Directory Users And Computers as the program for changing the
	domain mode.
	
	Change:
	"1. Click Start, point to Programs, point to Administrative Tools, and then click
	Active Directory Users And Computers."
	
	To:
	"1. Click Start, point to Programs, point to Administrative Tools, and then click
	Active Directory Domains And Trusts."
	
	
	Page 119: "Operations Master" Should Be "Standby Operations Master"
	-------------------------------------------------------------------
	
	On page 119, under "Relative ID Master Failure"
	
	Change:
	"If the relative identifier master will be unavailable for an unacceptable length
	of time, you can seize role to the operations master."
	
	To:
	"If the relative identifier master will be unavailable for an unacceptable length
	of time, you can seize role to the standby operations master."
	
	
	Page 135: Forward Should Be Reverse
	-----------------------------------
	
	On page 135, under "Zone File",
	
	Change:
	"For the standard primary forward lookup zone type"
	
	To:
	"For the standard primary reverse lookup zone type"
	
	
	Page 144: IFXR Should Be IXFR
	-----------------------------
	
	On page 144, in the third line,
	
	Change:
	"IFXR allows..."
	
	To:
	"IXFR allows..."
	
	
	Page 168: Incorrect Screenshot
	------------------------------
	
	On page 168, Figure 6.6, change the four options in the figure
	
	From:
	"None - Once per Hour - Twice per Hour - Four Times per Hour"
	
	To:
	"Replication Not Available - Replication Available"
	
	
	Page 185: Incorrect Information About Password Length
	-----------------------------------------------------
	
	On page 185, in the fourth bulleted item, the password length is incorrect.
	
	Change:
	"Passwords can be up to 14 characters; a minimum length of eight characters is
	recommended."
	
	To:
	"Passwords can be up to 127 characters; a minimum length of eight characters is
	recommended."
	
	
	Page 193: Incorrect Information About Option Overriding In Table 7.8
	--------------------------------------------------------------------
	
	On page 193, in Table 7.8, the description for "Password Never Expires" is
	incorrect.
	
	Change the last sentence from:
	"The User Must Change Password At Next Logon option overrides the Password Never
	Expires option"
	
	To:
	"The Password Never Expires option overrides the User Must Change Password At
	Next Logon option"
	
	
	Page 244: Incorrect Information About Changing Universal Group Scope
	--------------------------------------------------------------------
	
	On page 244, please remove the Note section under "Changing the Group Scope to
	Universal":
	
	"Note Windows 2000 does not allow changing the scope of a universal group because
	usage and membership rules for other groups are more restrictive."
	
	
	Page 251: Incorrect Group Scope For Enterprise Admins
	-----------------------------------------------------
	
	On page 256, at the top of the page, "Enterprise Admins" is listed under the
	column "Predefined Global Group". This is incorrect. "Enterprise Admins" is a
	predefined Universal Group.
	
	
	Pages 251 & 252: Correction To Table 8.7's Heading
	--------------------------------------------------
	
	On pages 251 and 252, change:
	"Table 8.7 Commonly Used Built-In Domain Local Global Group"
	
	To:
	"Table 8.7 Commonly Used Built-In Domain Local Group"
	
	
	Page 252: Local User Manager Should Be Local Users And Groups
	-------------------------------------------------------------
	
	On page 252, in the last sentence of the first paragraph under "Built-In Local
	Groups"
	
	Change:
	"...in the Local User Manager snap-in."
	
	To:
	"...in the Local Users and Groups snap-in."
	
	
	Page 252: Incorrect Reference To Windows 2000 Workstation
	---------------------------------------------------------
	
	On page 252, in Table 8.8 there are two references to "Windows 2000 Workstation".
	They should read "Windows 2000 Professional".
	
	
	Page 367: Missing Machine Parameter
	-----------------------------------
	
	On page 367, in step 1, the "netdom move" syntax sample is missing the "machine"
	parameter, which specifies the workstation or member server to be moved.
	
	Change:
	Open a command prompt and type " netdom move /D:domain [/OU:ou_path] [/Ud:User
	/Pd:{Password|*}] [/Uo:User /Po:{Password|*}][/Reboot:[time_in_seconds]]"
	(without the quotation marks)
	
	To:
	Open a command prompt and type "netdom move machine /D:domain [/OU:ou_path]
	[/Ud:User /Pd:{Password|*}] [/Uo:User
	/Po:{Password|*}][/Reboot:[time_in_seconds]]" (without the quotation marks)
	
	
	Page 368: Incorrect Netdom Domain Switch
	----------------------------------------
	
	The first bullet on page 368 lists the domain switch incorrectly.
	
	Change:
	"/domain"
	
	To:
	"/D:domain"
	
	
	Page 382: Inaccurate Information About Domain Restore
	-----------------------------------------------------
	
	On page 382, in the last paragraph, change:
	
	"To authoritatively restore Active Directory data, you must run the NTDSUTIL
	utility after you have performed a nonauthoritative restore of the System State
	data but before restarting the server."
	
	To:
	
	"To authoritatively restore Active Directory data, you must run the NTDSUTIL
	utility after you have performed a nonauthoritative restore of the System State
	data but before restarting the domain controller in normal mode."
	
	
	Page 417: Incorrect Information About GPO Processing Priority
	-------------------------------------------------------------
	
	On page 417, in the last sentence of the page,
	
	Change:
	"Windows 2000 processes GPOs from the top of the list to the bottom of the
	list."
	
	To:
	"Windows 2000 processes GPOs from the bottom of the list to the top of the
	list."
	
	
	Page 434: Error In Information About Publishing Applications
	------------------------------------------------------------
	
	On page 434, in the second sentence, in the first paragraph change the word
	"published" to "assigned" as follows.
	
	Change:
	"An application can be published to both computers and users."
	
	To:
	"An application can be assigned to both computers and users."
	
	
	Pages 470, 471 and 504: Incorrect Statement About Policy Refresh Interval
	-------------------------------------------------------------------------
	
	On pages 470, 471 and 504, in the last bulleted items,
	
	Change:
	"By default, policy propagation occurs every eight hours"
	
	To:
	"By default, policy propagation occurs every 90 minutes for Windows 2000-based
	computers, every 5 minutes for the domain controller."
	
	
	Pages 571 and 586: Incorrect Statement About Policy Refresh Interval
	--------------------------------------------------------------------
	
	On pages 571 and 586, in the NOTE, third bullet, change:
	
	"By default, policy progagation occurs every eight hours"
	
	To:
	
	"By default, policy progagation occurs every 90 minutes for Windows 2000-based
	computers, every 5 minutes for the domain controller."
	
	
	Page 600: Typo For IXFR
	-----------------------
	
	On page 600, in question 5, line 1 in the answer contains a typo.
	
	Change:
	"An IFXR query allows..."
	
	To:
	"An IXFR query allows..."
	
	
	Page 631: Error In Information About Publishing Applications
	------------------------------------------------------------
	
	On Page 631, for Question 6, in the first paragraph of the answer, the word
	"published" needs to be changed to "assigned" as follows.
	
	Change:
	"An application can be published to both computers and users."
	
	To:
	"An application can be assigned to both computers and users."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK 0-7356-0999-3 WIN2000 0-7356-1387-7
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
