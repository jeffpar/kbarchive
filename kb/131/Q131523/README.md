---
layout: page
title: "Q131523: PC Win: Return Receipt Interpretability with Foreign Language"
permalink: /kb/131/Q131523/
---

## Q131523: PC Win: Return Receipt Interpretability with Foreign Language

	Article: Q131523
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Mail for Windows user can select the option to receive a return
	receipt message. Normally, this will generate a return receipt message in the
	form of a postcard that displays the date and time the message was opened by the
	recipient. However, in certain cases a standard message will be generated.
	
	CAUSE
	=====
	
	When the receiving client is MS-DOS workstation, the sender will receive a
	message with a body such as the following:
	
	   [013]             ***** Read receipt from a registered message *****
	
	  Your message:
	
	  To:    Administrator                                   Date: 04-26-95
	  Subject:     Test message                              Time: 7:49
	
	                       Was read 04-26-95 17:49
	
	When the user reads the message using Mail for Windows in a different language
	version (for example, the French version), the sender will receive a text only
	message with a body such as the following:
	
	  Microsoft Mail v3.0 IPM.Microsoft Mail.Read Receipt
	  De:  John DOE (local)
	  Date d'envoi: 1995-04-26 17:26
	  A:   Administrator
	  Objet:  Accus? de r?ception: John DOE
	  Identification du message: 016FA408
	  ID de la conversation: 016FA408
	  Votre message ?: John DOE MYCORPORATION:/johndoe)
	  Ayant pour titre: return receipt
	  Et envoy? le: 1995-04-26 17:25
	  A ?t? lu le: 1995-04-26 17:26
	  Niveau de priorit?: C
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0b of Microsoft Mail
	for Windows. This problem was corrected in the version 3.2 of Microsoft Mail for
	Windows.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q119356 PC Win: Multi-Language Clients Append Extended Headers
	
	Additional query words: 3.20 3.2a 3.2b 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300b
	Version           : WINDOWS:3.0b
	
	=============================================================================
	
