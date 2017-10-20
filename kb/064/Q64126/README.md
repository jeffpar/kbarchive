---
layout: page
title: "Q64126: Overview of How to Share Memory Between Applications"
permalink: /kb/064/Q64126/
---

## Q64126: Overview of How to Share Memory Between Applications

{% raw %}

	Article: Q64126
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Listed below are three ways to share memory between Windows applications; these
	are the only methods that are guaranteed to work in all memory configurations
	and in future versions of Windows:
	
	1. Using the Clipboard
	
	2. Storing information in the data segment of a shared Dynamic-Link Library
	  (DLL)
	
	3. Dynamic Data Exchange (DDE)
	
	MORE INFORMATION
	================
	
	1. The Clipboard is the easiest method to use, and is discussed in the Windows
	  Software Development Kit (SDK) as well as in such books as Charles Petzold's
	  "Programming Windows."
	
	2. Sharing data in the data segment of a DLL is possible because there is only
	  one data segment for all instances of the DLL; DLLs are not "instanced."
	  Because of this, it is possible to have the DLL do a LocalAlloc() out of its
	  local heap, which is part of its DGROUP and thus is limited to 64K.
	  Programmers must determine the memory scheme that best suits their needs and
	  what calls they will make to the DLL to copy/share that memory to other
	  applications that call into it.
	
	3. DDE is designed to allow applications that follow the protocol to share/pass
	  data back and forth. An "envelope and letter" analogy, which is listed below,
	  provides an example of how this works:
	
	  If some information needs to be sent from one person/application to another
	  person/application, do the following:
	
	  a. Address the envelope: Call GlobalAlloc() on a piece of global memory with
	     the GMEM_DDESHARE flag.
	
	  b. Write the letter on a piece of paper: Call GlobalLock() and write to the
	     global memory.
	
	  c. Seal the letter: Call the GlobalUnlock() function.
	
	  d. Send the letter off to the other person: Use the PostMessage() function
	     with a WM_DDE_DATA message that has the hGlobalMemory in it.
	
	  To receive and read the letter, the other person/application does the
	  following:
	
	  a. Get the letter: A WM_DDE_DATA message is found in the message queue, along
	     with the handle of the global memory, hGlobalMemory.
	
	  b. Open the envelope: Call GlobalLock (hGlobalMemory).
	
	  c. Make a copy of the letter and read it:
	
	     1. Create a new envelope: Call GlobalAlloc(hNewEnvelope) and use the
	        GMEM_DDESHARE flag IF the letter needs to be sent back.
	
	     2. Open the new envelope: Call GlobalLock(hNewEnvelope).
	
	     3. Copy the contents of the old letter to the new letter, modifying the
	        contents at this time if necessary.
	
	     4. Seal the envelope: Call GlobalUnlock().
	
	     If the person/application wants to send the letter back to the
	     person/application that originally sent the letter, perhaps with some
	     answers to questions asked in the original letter, the following procedure
	     should be used:
	           5. Send the letter: Call PostMessage() with the new handle to global
	        memory.
	
	  d. When done with the old letter, throw it away: Use GlobalUnlock() on the
	     handle and then call GlobalFree().
	
	  According to the DDE specification, the rules for freeing the global memory
	  object are as follows:
	
	  Receiver deletes memory unless either of the following is true:
	
	  1. fRelease flag is zero.
	
	  2. The fRelease flag is 1; however, the receiving (client) application
	     responds with a negative WM_DDE_ACK message.
	
	  For more information, please refer to Chapter 15 in the Windows SDK reference
	  manual.
	
	For more information on sharing memory, please refer to Chapters 15 and 16 of the
	"Microsoft Windows Software Development Kit Guide to Programming."
	
	For more information on DDE, please refer to Chapter 22 of the "Microsoft Windows
	Software Development Kit Guide to Programming."
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
