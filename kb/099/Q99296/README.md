---
layout: page
title: "Q99296: Error: Training Could Not Be Carried Out for &quot;Bravo&quot;"
permalink: kb/099/Q99296/
---

## Q99296: Error: Training Could Not Be Carried Out for &quot;Bravo&quot;

	Article: Q99296
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may encounter the following error message when training words such as
	"Bravo" with Voice Pilot:
	
	  
	
	  Training could not be carried out for "Bravo", most likely due to
	  background noise.  Retrain this word?
	                      <YES>     <NO>
	
	Changing the word spelling or capitalization allows you to train this word.
	
	MORE INFORMATION
	================
	
	The word Bravo is part of the File Manager vocabulary and can be used to select
	drive B on your system when available. If you try to train this word when using
	Voice Pilot you will get the above error message and you won't be able to train
	it. This will happen even if there is no background noise or if you add the word
	as a command to a different vocabulary. As long as the word stays exactly the
	same, training cannot be completed.
	
	Workaround
	----------
	
	Delete the word and replace it with a noncapitalized "bravo" or with a different
	spelling, such as "Brravo".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Sound System versions
	1.0 and 1.0a. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
