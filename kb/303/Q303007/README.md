---
layout: page
title: "Q303007: Sounds Do Not Play In MSN Explorer"
permalink: /kb/303/Q303007/
---

## Q303007: Sounds Do Not Play In MSN Explorer

{% raw %}

	Article: Q303007
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running MSN Explorer does not generate the expected sounds (greetings and other
	sound effects), even though other programs do generate sounds.
	
	CAUSE
	=====
	
	Several issues can cause this:
	
	1. You have disabled the option to play sounds in MSN Explorer.
	
	2. The Microsoft ADPCM codec is not installed or enabled.
	
	3. DirectSound is not operating correctly.
	
	RESOLUTION
	==========
	
	First, check to see if the option for playing sounds in MSN Explorer is enabled
	by doing the following:
	
	1. Sign in to MSN Explorer.
	
	2. In the upper-right corner, click Help And Settings .
	
	3. Click Personalize MSN in the left menu, and then click the Change Your Sound
	  Settings link in the right pane.
	
	4. Select the All sounds on check box, and click the Change Now button.
	
	If the sounds still do not play, check that the Microsoft ADPCM codec is enabled
	by doing the following:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Windows 98 and earlier, double-click the Multimedia icon. In Windows ME
	  and 2000, click the Sounds and Multimedia icon.
	  This may require first clicking the view all Control Panel options link. The
	  Multimedia Properties dialog box appears.
	
	3. On the Devices tab, expand the list of Audio Compression Codecs by clicking
	  the "+" symbol.
	
	4. Select Microsoft ADPCM codec, and click the Properties button.
	  The Microsoft ADPCM codec Properties dialog box appears.
	
	5. Select the Use this audio codec box, and click the Apply button, and then the
	  OK button.
	
	6. Repeat this process for each Microsoft ADPCM codec in the list.
	
	7. In the Multimedia Properties box, click OK.
	
	8. Close Control Panel by clicking the "X" in the upper-right corner.
	
	If the sounds still do not play, DirectSound may not be operating correctly. To
	see if this is the problem, follow these steps:
	
	1. Click the Start button, and then click Run.
	  The Run dialog box appears.
	
	2. In the Open box, type c:\windows\system\dxdiag.exe.
	  The DirectX Diagnostic Tool box appears.
	
	3. On the Sound tab, click the Test DirectSound button.
	  A dialog box appears, informing you that the tool will now play sounds in
	  several different audio formats.
	
	4. Make sure that the system volume is at an audible level and click Yes.
	  The tool now plays a series of sounds, asking you after each one if you heard
	  the sound.
	
	5. Click the Yes button if you heard the sound, or click the No button if you
	  did not hear the sound.
	
	6. To close the tool, click the Exit button.
	
	7. If you did not hear one or more sounds, you may want to update DirectX by
	  going to http://www.microsoft.com/directx/ and clicking the Downloads link.
	  If this does not resolve the problem, you may need to update your sound card
	  drivers. We recommend that you either contact the manufacturer of the
	  computer or the manufacturer of the sound card directly, or go to their Web
	  sites for more information.
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610 kbMSNExplorer
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
