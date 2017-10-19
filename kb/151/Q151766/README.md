---
layout: page
title: "Q151766: DOCERR: Mastering Access: Wrong Answer in Self Test"
permalink: /kb/151/Q151766/
---

## Q151766: DOCERR: Mastering Access: Wrong Answer in Self Test

	Article: Q151766
	Product(s): Microsoft Mastering Series
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbmm kbnokeyword
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Access Programming ISBN 1-55615-912-9, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Mastering Access Programming, Chapter 9: Database Replication, the answer to
	question #6 in the Self-Check is wrong.
	
	MORE INFORMATION
	================
	
	In Chapter 9: Database Replication, question #6 in the Self-Check states:
	
	  What is the term for when Microsoft Jet detects that the same record was
	  changed at both members of the replica set?
	
	giving the following as answer choices:
	
	- Design Error.
	
	- Design Conflict.
	
	- Synchronization Error <I: Synchronization errors occur when a data change
	  at one replica set member cannot be applied to another member because it
	  violates a constraint such as a referential integrity rule or uniqueness
	  assertion.
	
	- Synchronization Conflict <C: Synchronization Conflict is the term for when
	  Microsoft Jet detects that the same record was changed at both members of the
	  replica set.
	
	The program gives the correct answer as Synchronization Error.
	
	The right answer is actually Synchronization Conflict.
	
	This answer can be validated by going to the "Replication Issues" topic, and then
	choosing "Synchronization Conflict" where the first paragraph states:
	
	Synchronization conflicts occur when Microsoft Jet detects that the same record
	was changed at both members of the replica set. Even if the changes made at one
	replica set member were in different fields than the changes made at the other
	member, Microsoft Jet treats it as a synchronization conflict.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed above. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 1.0 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbmm kbnokeyword 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :1.0,1.0a
	
	=============================================================================
	
