---
layout: page
title: "Q89875: Changes Made to SYSTEM.INI File During Sound System Setup 1.0"
permalink: /kb/089/Q89875/
---

## Q89875: Changes Made to SYSTEM.INI File During Sound System Setup 1.0

{% raw %}

	Article: Q89875
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Sound System Setup program makes the following changes to the
	SYSTEM.INI file located in the Windows directory:
	
	- The following line is added to the [386Enh] section:
	
	  Device=VSNDSYS.386
	
	- The following lines are added to the [drivers] section:
	
	  wave=SNDSYS.DRV aux=SNDSYS.DRV midi=SNDSYS.DRV WaveMapper=MSACM.DRV
	
	- The following line is added to the [mciseq.drv] section:
	
	  disablewarning=true
	
	- The following section is added:
	
	  [SNDSYS.DRV] DmaBufferSize=32 EnableAutoAcquireOPL3=1 DMADAC=0 DMAADC=0
	  Interrupt=11 IOAddress=530
	
	- The [386Enh] section is moved to the end of the file.
	
	- Lines that are commented out in the [386Enh] section (lines that have a
	  semicolon [;] in front of them) are reproduced, and the entire set of
	  commented out lines is placed at the beginning of the [386Enh] section.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	

{% endraw %}
