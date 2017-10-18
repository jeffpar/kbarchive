---
layout: page
title: "Q96530: PC WRmt: Default Messages Store Files"
permalink: kb/096/Q96530/
---

## Q96530: PC WRmt: Default Messages Store Files

	Article: Q96530
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are the two default Mail Message Files (MMF) for version 3.2 of
	Microsoft Mail Remote for Windows:
	
	- <WINDOWS>\MSMAIL.MMF (for the MS Remote Mail driver)
	
	- <WINDOWS>\MS_ATT.MMF (for the AT&T EasyLink driver)
	
	These filenames can be changed. However, they are referenced in both the
	SHARED.INI file in the MSMAIL directory and in the MSMAIL.INI file in the
	Windows program directory. Make sure the references match the actual paths, or
	create new message store files when prompted from Remote Mail for Windows.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
