---
layout: page
title: "Q257559: Windows 2000 Professional Resource Kit Comments and Corrections"
permalink: /kb/257/Q257559/
---

## Q257559: Windows 2000 Professional Resource Kit Comments and Corrections

{% raw %}

	Article: Q257559
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Professional Resource Kit ISBN 1-57231-808-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Windows 2000 Professional
	Resource Kit, ISBN 1-57231-808-2.
	
	The following topics are covered:
	
	- CD-ROM: EBook Was Not Included
	
	- CD-ROM: Incorrect Error Message When Running IE 6
	
	- Page xxxii: Shows Wrong Page Number For The Index
	
	- Page 27: Correction Regarding NetWare Interoperability
	
	- Page 89: Remove "Windows 3.1" Reference Under Upgrade
	
	- Page 135: /a Switch Enables Accessibility Options
	
	- Page 300: Poledit.exe Not Included With Windows 2000 Professional
	
	- Page 542: Typographical Errors
	
	- Page 968: Figure 22.3 Does Not Show Naming Restrictions
	
	- Page 977: Order Of Fully Qualified Domain Names Is Incorrect
	
	- Page 1329: Change Example in Note
	
	MORE INFORMATION
	================
	
	CD-ROM: eBook Was Not Included
	------------------------------
	
	An electronic version of the Microsoft Windows 2000 Professional Resource Kit was
	not included on the companion CD-ROM. There is currently no eBook available for
	this title.
	
	
	CD-ROM: Incorrect Error Message When Running IE 6
	-------------------------------------------------
	
	For systems running Internet Explorer 6, upon opening the Resource Kit online
	documentation, the following message is displayed:
	
	"You are using an old browser. Help may not display correctly. Please upgrade to
	the most recent version of IE."
	
	You can continue without error by selecting the "OK" button.
	
	
	Page xxxii: Shows Wrong Page Number For The Index
	-------------------------------------------------
	
	On page xxxii of the Table of Contents, the last entry on the page lists 1569 as
	the starting page number for the index. It should list page 1703 as the starting
	page number for the index.
	
	
	Page 27: Correction Regarding NetWare Interoperability
	------------------------------------------------------
	
	On page 27 in the section on NetWare Interoperability, the second and third
	paragraphs contradict each other.
	
	It is not necessary to remove Novell Client 32 when upgrading to Windows 2000
	Professional, if the version of Novell Client 32 is earlier than version 4.7.
	
	Change:
	"On computers running Windows 95, Windows 98, or Windows NT 4.0 Workstation, it
	is necessary to remove Novell Client 32 before upgrading the operating system,
	and then reinstall and reconfigure the computer after the upgrade."
	
	To:
	"On computers running Windows 95, Windows 98, or Windows NT 4.0 Workstation, it
	is necessary to remove Novell Client 32 before upgrading the operating system to
	something other than Windows 2000, and then reinstall and reconfigure Novell
	Client 32 after the upgrade."
	
	
	Page 89: Remove "Windows 3.1" Reference Under Upgrade
	-----------------------------------------------------
	
	On page 89, under "Upgrade" it states that Windows 2000 Professional has the
	ability to upgrade Windows 3.1. This is incorrect. Windows 3.1 should be deleted
	from this statement, as an upgrade is not possible with this operating system.
	
	Change:
	"Windows 2000 Professional Setup includes the ability to upgrade Windows 3.1,
	Windows 95, Windows 98, and Windows NT Workstation version 3.51 and version
	4.0."
	
	To: "Windows 2000 Professional Setup includes the ability to upgrade Windows 95,
	Windows 98, and Windows NT Workstation version 3.51 and version 4.0."
	
	
	Page 135: /a Switch Enables Accessibility Options
	-------------------------------------------------
	
	On page 135, in Table 4.6, there is an incorrect description for the /a switch.
	
	Change:
	"/a Skips the free disk space verification of the Setup startup floppy disks."
	
	To:
	"/a Enables accessibility options."
	
	
	Page 300: Poledit.exe Not Included With Windows 2000 Professional
	-----------------------------------------------------------------
	
	On page 300, the Note at the top of the page should be revised to reflect the
	fact that Poledit.exe is included only with Windows 2000 Server and is not
	included with Windows 2000 Professional.
	
	Change:
	"Note: you can use Windows 2000 .adm files only in the System Policy Editor
	(Poledit.exe) that is included with Windows 2000."
	
	To:
	"Note: you can use Windows 2000 .adm files only in the System Policy Editor
	(Poledit.exe) that is included with versions of Windows 2000 Server."
	
	
	Page 542: Typographical Errors
	------------------------------
	
	On page 542, in the section titled "Kerberosv5 Authentication, the second
	paragraph contains two typos.
	
	Change:
	"...thatis used to get service tickets (STs) thatprovide access to network
	services."
	
	To:
	"...that is used to get service tickets (STs) that provide access to network
	services."
	
	
	Page 968: Figure 22.3 Does Not Show Naming Restrictions
	-------------------------------------------------------
	
	On page 968, the sentence at the end of the second paragraph from the bottom says
	that Figure 22.3 shows the naming restrictions for NetBIOS names. However,
	Figure 22.3 does NOT show naming restrictions.
	
	This sentence should be deleted.
	
	
	Page 977: Order Of Fully Qualified Domain Names Is Incorrect
	------------------------------------------------------------
	
	On page 977, in the bottom third of the page, the order of the domain names is
	incorrect.
	
	Change:
	
	  coffee.com.
	  coffee.reskit.com.
	  coffee.redmond.reskit.com.
	
	To:
	
	  coffee.redmond.reskit.com.
	  coffee.reskit.com.
	  coffee.com.
	
	
	Page 1329: Change Example in Note
	---------------------------------
	
	In the Note at the bottom of page 1329, the third sentence implies that Windows
	2000 Professional supports four processors. Windows 2000 Server does support
	four or more processors.
	
	Change:
	"For example, on a four-processor system, the expected range of processor queue
	length on a system..."
	
	To:
	"For example, with Windows 2000 Server on a four-processor system, the expected
	range of processor queue length on a system..."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-808-2 RKBOOK WIN2000 RESOURCE KIT W2KPRO
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
