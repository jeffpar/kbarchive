---
layout: page
title: "Q101679: X400: Err Msg: EiconCard X.25 Error Messages"
permalink: /kb/101/Q101679/
---

## Q101679: X400: Err Msg: EiconCard X.25 Error Messages

{% raw %}

	Article: Q101679
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This network error format may appear when an EiconCard error occurs:
	
	  X.25 error: Message Error number
	
	Here is an example of an EiconCard error message:
	
	  X.25 error: Command timeout 5
	
	MORE INFORMATION
	================
	
	The following table lists the messages, along with their error numbers, that may
	be displayed:
	
	Message                                      Error Number
	--------------------------------------------------------------------
	
	Invalid buffer length.                         1
	Invalid command.                               3
	Command time-out.                              5
	No circuit available.                          9
	Call cleared.                                 10
	Command canceled.                             11
	PU name exist.                                13
	PU name table full.                           14
	Session table full.                           17
	Unsuccessful call.                            18
	Protocol name not found.                      20
	Circuit in use.                               22
	PU name not found.                            23
	Session reset.                                14
	Trace not started.                            25
	Insufficient memory.                          26
	Too many outstanding commands.                34
	Bad port number.                              35
	No number to dial.                            37
	No dial tone.                                 64
	Modem test failed.                            80
	Modem not ready.                             144
	Modem not ready (no DSR).                    145
	Modem not ready (no CTS).                    146
	Modem not ready (no clock).                  147
	Remote line busy      .                      148
	Remote not answering.                        149
	No line available.                           150
	Modem in use.                                153
	Bad phone number syntax.                     158
	Modem initialized.                           159
	Link level not ready.                        160
	Packet level not ready.                      176
	Restart indication received.                 178
	Transport connection cleared remotely.       192
	Transport connection cleared locally.        193
	Time-out occurred on CR or DR.               194
	X.25 network connection cleared.             195
	X.25 network reset.                          196
	Transport connection refused by remote.      197
	CR sent by remote site not acceptable.       198
	Not enough memory to start transport layer.  207
	Submit request again.                        248
	EiconCard snapshot.                          249
	EiconCard snarked.                           250
	EiconCard error.                             251
	EiconCard not loaded.                        252
	EiconCard halted.                            253
	EiconCard driver not installed.              254
	Command not completed.                       255
	
	Additional query words: 3.20 errmsg alert eicon card
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
