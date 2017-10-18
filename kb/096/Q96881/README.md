---
layout: page
title: "Q96881: Err Msg: Voice Pilot Cannot Support Application"
permalink: kb/096/Q96881/
---

## Q96881: Err Msg: Voice Pilot Cannot Support Application

	Article: Q96881
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the default vocabulary is missing or is corrupt, Voice Pilot generates the
	following error message when it is started:
	
	  There are one or more user (*.usr) or voice (*.vcb) data files in the
	  VOICEPIL.INI that cannot be found. The Voice Pilot will resort to using the
	  default file as a substitute.
	
	You can continue using Voice Pilot, but if you try to use it with an application
	that does not have a custom vocabulary, the following error message is
	generated:
	
	  Cannot support the following application because the Voice Pilot cannot find
	  the default data files
	
	This message means that the default vocabulary is missing or corrupt.
	
	To correct he problem you need to delete, then reinstall, the default vocabulary.
	
	MORE INFORMATION
	================
	
	To correct the problem, proceed as follows:
	
	1. Delete the DEFAPP.VCB file from the Windows Sound System directory or from
	  the location specified in the [apps] section of the VOICEPIL.INI file. (You
	  can find the VOICEPIL.INI file in your Windows directory.)
	
	2. Reinstall the DEFAPP.VCB from the Windows Sound System disks. The file is in
	  compressed form (defapp.vc_) and can be found on disk 5 of the 3 1/2" or 5
	  1/4" media. You can use the expansion program from Windows to expand the
	  file.
	
	Additional query words: 1.0 1.0a 2.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
