---
layout: page
title: "Q194498: WD97: Error Message: File Is Not a Macintosh Word File"
permalink: /kb/194/Q194498/
---

## Q194498: WD97: Error Message: File Is Not a Macintosh Word File

{% raw %}

	Article: Q194498
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word for Windows, when you attempt to open a file in Word for the
	Macintosh format, you may receive the following error message:
	
	  File is not a Macintosh Word file.
	  Word cannot open the document.
	
	CAUSE
	=====
	
	Unless the Word for the Macintosh file is indeed invalid, this message is
	probably occurring because you uploaded the document from a Macintosh computer
	to a PC by means of communications software that attaches MacBinary information
	to the file.
	
	WORKAROUND
	==========
	
	To correctly transfer files from a Macintosh to a PC by means of a modem or an
	electronic service, make sure that the communications software on the Macintosh
	is set to transfer files as Binary (or Binary Only). Most communications
	packages on the Macintosh can prevent the MacBinary information from being
	uploaded. For more information, see the documentation for your communications
	software.
	
	MORE INFORMATION
	================
	
	MacBinary information is data derived from a Macintosh file's data fork,
	resource fork, and file header, and includes information beyond the content of
	the document itself, including the Macintosh file type, creator, creation date,
	and modification date. If the option to attach MacBinary information is
	available and active in the communications software that you are using, the data
	fork, resource fork, and file header are all concatenated in memory and sent to
	the PC receiver. If the MacBinary option is not activated, only the data fork is
	sent.
	
	Because the data fork alone represents the actual content of a document, it is
	desirable to retain only this information when a Macintosh-formatted file is
	transferred to a PC. Most MS-DOS-based and Windows-based programs generally do
	not make use of MacBinary information, and the inclusion of this information at
	the beginning of a file may cause Word for Windows not to recognize the file as
	a Word for the Macintosh document.
	
	A similar problem can occur if the same document is instead saved from Word for
	the Macintosh to Word for Windows format and is then transferred to your PC by
	means of the same communications software. Once again, the communications
	software may attach an additional 128 bytes containing MacBinary information to
	the beginning of the Word for Windows document file. Because Word for Windows
	does not expect this information at the beginning of a Word for Windows file, it
	fails to recognize the file and returns an error message.
	
	NOTE: This problem occurs only when binary files are transferred directly from a
	Macintosh to a PC by means of a null modem cable and communications software or
	by means of an electronic service, where the sender is uploading the file from a
	Macintosh system and the receiver is downloading it to a PC.
	
	This problem does not occur with Macintosh SuperDrive PC disk read/write
	configuration utilities such as Apple File Exchange (AFE), DOS Mounter,
	AccessPC, or Apple PC Exchange. Likewise, the problem also does not occur when
	files are transferred from a Macintosh to a PC by means of networks that include
	Macintosh services, such as Microsoft LAN Manager, TOPS, Novell, or Banyan
	VINES.
	
	NOTE: If you suspect the above scenario is the cause of your problem but are
	unsure how to configure your communications software, if both the Macintosh and
	PC computers are locally accessible, you can verify whether your original Word
	for the Macintosh document is actually valid by using a different means of
	transferring the file to your PC. For example, if your Macintosh computer is
	equipped with a SuperDrive, you can use the AFE utility supplied with your Apple
	System software to transfer the Macintosh file to an MS-DOS-formatted disk. AFE
	does not attach MacBinary information to a file.
	
	Additionally, when transferring files from a PC to a Macintosh, because the
	MacBinary information is not available after the transfer has been completed,
	the file will likely have no icon that associates it with the Macintosh version
	of the program. Because the File Type and Creator Type are stored in the
	MacBinary portion of the file, no "association" exists between the file and its
	intended program. If you know what the appropriate File and Creator Type is, you
	can change it by using a utility such as ResEdit. Also, most file transfer
	utilities (such as DOS Mounter, PC Exchange and AccessPC) include a mapping
	feature for making these associations in order to automatically assign the
	correct File and Creator Types to incoming files.
	
	Additional query words: CompuServe GEnie America Online Prodigy Mac Binary translate export import err msg errmsg
	
	======================================================================
	Keywords          : kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
