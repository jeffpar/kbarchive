---
layout: page
title: "Q129578: Broken Sound or Heavy Reverberation Playing .WAV File"
permalink: /kb/129/Q129578/
---

## Q129578: Broken Sound or Heavy Reverberation Playing .WAV File

	Article: Q129578
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a .WAV file on a Creative Labs Sound Blaster 16 card, the playback
	may sound broken and have a heavy reverberation.
	
	CAUSE
	=====
	
	You have installed the Windows 3.1 drivers for the Sound Blaster 16 card. There
	is a known problem with the mono compressor/decompressor (codec) included with
	the Windows 3.1 Sound Blaster 16 drivers.
	
	RESOLUTION
	==========
	
	You may be able to resolve this problem by installing the updated audio codecs
	included with Windows 95. To install the updated codecs, follow these steps:
	
	1. In Control Panel, double-click the Add/Remove Programs icon.
	
	2. Click the Windows Setup tab.
	
	3. In the Components box, click Multimedia.
	
	4. Click the Details button.
	
	5. Click the Audio Compression check box to select it.
	
	6. Click the OK button.
	
	7. Insert the appropriate Windows 95 disks as requested.
	
	If the distortion continues, you may need to install the Windows 95 Sound Blaster
	drivers. To install these drivers, you must first remove the Windows 3.1
	drivers. Please refer to the Creative Labs documentation for information about
	removing the Windows 3.1 drivers.
	
	After you have removed these drivers and restarted your computer, you can use the
	Add New Hardware Wizard to detect the Sound Blaster 16 card and automatically
	install the Windows 95 drivers.
	
	MORE INFORMATION
	================
	
	This problem is specific to the IMA ADPCM mono codec. All the other codecs work
	properly. You can play a stereo IMA ADPCM .WAV file without problems.
	
	Creative Labs has released updated drivers for their Sound Blaster 16 sound card.
	Windows 95-compatible drivers from Creative Labs are available on the Creative
	Labs World Wide Web site. The updated drivers are available as a file named
	Sbw95up.exe dated 6/4/96. These drivers may resolve the issue described in this
	article.
	
	Additional query words: mv pas pro sb sbpro kbfaq reverb
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
