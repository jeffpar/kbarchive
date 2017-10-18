---
layout: page
title: "Q135248: Exposition Error Message: &quot;Incompatible PICCLIP.VBX&quot;"
permalink: kb/135/Q135248/
---

## Q135248: Exposition Error Message: &quot;Incompatible PICCLIP.VBX&quot;

	Article: Q135248
	Product(s): Microsoft Product Support Information
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exposition for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Exposition, you may receive the following error message:
	
	  PICCLIP.VBX is incompatible
	
	CAUSE
	=====
	
	This problem occurs if you are running a Visual Basic 2.0 program that is using
	an older version of the file Picclip.vbx when you start Microsoft Exposition.
	
	Microsoft Exposition is designed to run completely from the compact disc. This
	means that Microsoft Exposition will not automatically update an older version
	of the file Picclip.vbx located elsewhere on your system. Although Exposition is
	designed to use Picclip.vbx from the compact disc, if an older Visual Basic
	application is running, and the file Picclip.vbx is in memory, you will receive
	the error message described above.
	
	WORKAROUND
	==========
	
	To avoid receiving this error message when you run Microsoft Exposition, do the
	following:
	
	1. Close all programs or utilities that are running in Windows.
	
	2. In File Manager, use the Search command on the File menu to search for all
	  copies of the file Picclip.vbx on the computer.
	
	3. Locate the newer version of Picclip.vbx in the Pcexpo folder on the
	  Exposition disc.
	
	4. Copy the newer version of Picclip.vbx over the older versions found on the
	  computer's hard disk.
	
	You can now run the Visual Basic application, and run Microsoft Exposition
	without receiving an error message.
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	Additional query words: 1.00 expo sampler catalog
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search _IKkbbogus kbExposition
	Version           : :1.0
	
	=============================================================================
	
