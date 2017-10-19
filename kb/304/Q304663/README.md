---
layout: page
title: "Q304663: PRB: Office XP Developer Install from MSDN DVD Subscription Fail"
permalink: /kb/304/Q304663/
---

## Q304663: PRB: Office XP Developer Install from MSDN DVD Subscription Fail

	Article: Q304663
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 30-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network Subscriptions 
	- Microsoft Developer Network (MSDN) 
	- Microsoft Office XP Developer 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of Microsoft Office Developer Tools from the DVD image
	provided in the July 2001 edition of the MSDN Universal Subscription (Disk
	0908), the user is prompted for the Office XP CD with the following message:
	
	  Please insert the disk Microsoft Office Developer - English Disk 1
	
	But the contents of all of the individual CDs are contained on the one DVD. Even
	if the user leaves the DVD in the drive, he or she is unable to direct the
	installation program to the "Disk 1" contained within the DVD image. Because the
	user is unable to supply the media as requested to continue the installation,
	the only option is to cancel the installation.
	
	CAUSE
	=====
	
	The volume label expected by Setup for Office XP Microsoft Office Developer is
	designed for the CD version. All the Office XP and Microsoft Office Developer
	files are on the DVD, but they are not detected. There is no option to browse
	available. This is due to the fact that the DVD image is the same as the MSDN
	Downloads version, which requires the user to copy the files to the local
	computer prior to installation.
	
	RESOLUTION
	==========
	
	Run the Windows Components update individually. To do so, browse to
	\English\OfficeXP\WindowsCUP\Setup.exe. After the installation of the Windows
	Component Update completes, the Microsoft Office Developer installation can be
	run from the Setup.exe contained on the DVD in the \English\OfficeXP\Developer
	folder.
	
	-or-
	
	Copy the Setup files to a temporary location on the hard drive and run Setup from
	the local hard disk. After installation is complete, the Setup files can be
	deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the July 2001 DVD edition of the
	Microsoft Developer Network Subscription.
	
	MORE INFORMATION
	================
	
	This only occurs with the DVD version of MSDN subscription for July 2001. The
	CD-ROM version is not affected.
	
	
	Additional query words: OFFXPDEV MOD2002
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbOfficeSearch kbAudDeveloper kbMSDNSearch kbZNotKeyword2 kbOfficeXP kbOfficeXPSearch kbMSDNSubsc kbOfficeXPDevSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
