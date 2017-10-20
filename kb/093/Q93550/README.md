---
layout: page
title: "Q93550: Pro Audio Spectrum 16 May Hang Windows 3.1"
permalink: /kb/093/Q93550/
---

## Q93550: Pro Audio Spectrum 16 May Hang Windows 3.1

{% raw %}

	Article: Q93550
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run an MS-DOS application from Windows version 3.1, the system may hang
	if Windows tries to play a Wave audio file (*.WAV) through the Pro Audio
	Spectrum 16 audio card. This happens if a Windows application running in the
	background attempts to play a Wave audio file.
	
	CAUSE
	=====
	
	This problem occurs if you use Pro Audio Spectrum Windows 3.1 driver versions
	earlier than 1.42. Versions 1.42 and later correct this problem.
	
	MORE INFORMATION
	================
	
	The Pro Audio Spectrum 16 has the ability to have separate DMA and IRQ settings
	for Windows and MS-DOS. The default settings for both MS-DOS and Windows are DMA
	3 and IRQ 7. Having different DMA and IRQ settings allows Windows 3.1
	applications to be configured for maximum performance since DMA channels 5, 6,
	and 7 are 16-bit channels. Most MS-DOS applications cannot access DMA channels
	5, 6, or 7 and thus typically use channels 1 or 3, which are only 8-bit
	channels. For this reason, it is beneficial to have separate DMA and IRQ
	settings for Windows and MS-DOS.
	
	According to Media Vision Technical Support, the Pro Audio Spectrum 16 must reset
	itself when switching from Windows to MS-DOS or from MS-DOS to Windows. Even if
	the DMA and IRQ settings are set the same for both Windows and MS-DOS, the
	Spectrum 16 must still reset itself when switching environments.
	
	For this reason, Windows 3.1 may hang if a Windows application tries to play a
	Wave audio file while an MS-DOS application is running. Since the Spectrum 16 is
	reset when switching from Windows to MS-DOS, Windows will be unable to play the
	Wave audio file. Upon exiting the MS-DOS application, Windows attempts to play
	the buffered Wave audio file. If the Wave audio file is more than a few seconds
	long, Windows may hang. Products, such as Microsoft SoundBits, that add the
	playing of Wave audio files to certain events in Windows (such as, the closing
	of an application) should function fine because of the relative short length of
	the their Wave audio files. Even with SoundBits, exiting an MS-DOS application
	in Windows will produce audible distortion in the Wave audio file as the
	Spectrum 16 is resetting itself.
	
	Setting the DMABufferSize line in the [386enh] section of the SYSTEM.INI file to
	a number higher than the default of 16 may help the problem, but may not totally
	eliminate it.
	
	Example:
	
	  DMABufferSize=64
	
	For more information, call Media Vision, Inc. Technical Support.
	
	The product included here, Pro Audio Spectrum 16, is manufactured by Media
	Vision, Inc., a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	
	REFERENCES
	==========
	
	"Pro Audio Spectrum 16 User's Guide," pages 1-27 to 1-28
	
	Additional query words: 3.10 audiospectrum lock lockup mediavision 1.50 1.5
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
