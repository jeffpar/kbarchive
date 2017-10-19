---
layout: page
title: "Q108401: Writer 1: ErrMsg: &quot;Almost Out of Space&quot; Message When Printing"
permalink: /kb/108/Q108401/
---

## Q108401: Writer 1: ErrMsg: &quot;Almost Out of Space&quot; Message When Printing

	Article: Q108401
	Product(s): Microsoft Home Kids Products
	Version(s): MACINTOSH:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for the Macintosh, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to print a banner or a card you created using the Banneroceros or
	Cardvark wizard in the Project Workshop, you may receive the following error
	message:
	
	  Hey! I'm almost out of space!
	
	This message may appear if you print to the StyleWriter II printer from the
	banner or card wizard. This message indicates that you are running out of
	memory, not hard drive space. The banner or card should print successfully in
	spite of the error message.
	
	Microsoft has confirmed this to be a problem in Creative Writer versions 1.0, 1.1
	and 1.1a.
	
	RESOLUTION
	==========
	
	If the card or banner doesn't print, you can resolve the problem by disabling
	Background Printing for the StyleWriter. Disable Background Printing by using
	the following steps:
	
	1. Save your document and exit Creative Writer.
	
	2. From the Apple menu, select the Chooser.
	
	3. Click the StyleWriter driver icon.
	
	4. Click the Background Printing box to remove the check mark, then close the
	  Chooser.
	
	5. Run Creative Writer and print the banner or card.
	
	After following these steps, you should be able to print successfully from
	Creative Writer.
	
	MORE INFORMATION
	================
	
	If you print the exact same kind of document from the Writing Studio, this error
	message doesn't appear. This is because the banner and card wizards use much
	more memory.
	
	Additional query words: 1.00 kids mac mskids 1.10 errmsg printing hang freeze printout output mczee cards card banners won't can't doesn't style writer pro 1.10a two
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbPTProdChange kbCreativeWriter110Mac kbCreativeWriter110aMac kbCreativeWriter100Mac
	Version           : MACINTOSH:1.0,1.1,1.1a
	
	=============================================================================
	
