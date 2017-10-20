---
layout: page
title: "Q93647: Creating a Custom Voice Pilot Vocabulary"
permalink: /kb/093/Q93647/
---

## Q93647: Creating a Custom Voice Pilot Vocabulary

{% raw %}

	Article: Q93647
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows Sound System Voice Pilot version 1.0 includes 16 default
	vocabularies for several of the most popular Windows-based applications. (For a
	complete listing refer to page 153 of the "Microsoft Windows Sound System User's
	Guide.")
	
	In addition, it is possible to create a custom vocabulary for any Windows-based
	application by performing the following steps:
	
	1. Run Voice Pilot.
	
	2. Run the Windows-based application for which you would like to create a
	  vocabulary file.
	
	3. From Voice Pilot, choose the Menu button from the tool bar and select
	  Vocabulary.
	
	4. Make sure the Windows-based application executed in step 2 is listed in the
	  Vocabulary For box.
	
	5. In the Vocabulary Item box, type the name of the command you want to add.
	
	6. In the Use Keyboard To Enter Definition Here box, type the keystrokes you
	  want the voice command to carry out.
	
	7. If you are defining a lower-level command, select the This Definition Valid
	  After check box, and choose the higher-level command to follow from the list
	  at the right.
	
	8. From the After Recognizing Item GoTo list, select the next command level to
	  which you want Voice Pilot to go.
	
	9. Choose the OK button.
	
	10. If the item has not been trained, the Train dialog box appears. Follow the
	  procedure in "Training Voice Command Items" in Chapter 8, "Controlling Your
	  Computer with Voice Pilot," in the "Microsoft Windows Sound System User's
	  Guide."
	
	11. Choose the OK button.
	
	12. Choose the Close button.
	
	A new vocabulary file has now been created for the application specified in the
	Vocabulary For box.
	
	MORE INFORMATION
	================
	
	Voice Pilot uses the default vocabulary (DEFAULT.VCB) for Windows-based
	applications without a vocabulary. When a change is made to the DEFAULT.VCB file
	by adding a vocabulary item (step 5 above), the vocabulary file is saved with
	the name of the application currently listed in the Vocabulary For box. Voice
	Pilot also updates the VOICEPIL.INI file to reflect the new vocabulary file.
	
	Once this is done, then you can modify the new vocabulary for your application by
	simply loading it and making the changes within Voice Pilot.
	
	If you're a developer and want to include you own custom Voice Pilot vocabulary
	for your application; you just follow the steps above to create and customize
	the vocabulary, and then include a routine in your Setup program to modify
	VOICEPIL.INI.
	
	For more information about the Windows Sound System, query on the following words
	in the Microsoft Knowledge Base:
	
	  sound and system and windows
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
