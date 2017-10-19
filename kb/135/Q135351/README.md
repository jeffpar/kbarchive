---
layout: page
title: "Q135351: PC Forms: MEFPKG.DAT File Size Limited to 64K"
permalink: /kb/135/Q135351/
---

## Q135351: PC Forms: MEFPKG.DAT File Size Limited to 64K

	Article: Q135351
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Electronic Forms Designer uses a special attachment (MEFPKG.DAT)
	that is enclosed with a mail message. The attachment contains data and
	information for the read form. The Electronic Forms Designer does not support
	forms that have MEFPKG.DAT files larger than 64K.
	
	MORE INFORMATION
	================
	
	If you attempt to call the electronic form's MEFWriteItem function with an
	attachment larger than 64K, you may get the following error:
	
	  MEF_DISK_FULL
	
	The reason for the 64K limit is not due to a size limitation on the electronic
	forms attachment itself. The electronic forms MEFWriteItem function calls the
	Microsoft Windows Application Program Interface (API) function,
	WritePrivateProfileString, that has this limitation.
	
	Additional information about the Windows API and WritePrivateProfileString can be
	found in the Microsoft Windows Software Development Kit (SDK) "Programmer's
	Reference."
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	
