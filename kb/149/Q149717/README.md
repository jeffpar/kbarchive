---
layout: page
title: "Q149717: PRB: MediaView: Jump to SubTopic Fails"
permalink: /kb/149/Q149717/
---

## Q149717: PRB: MediaView: Jump to SubTopic Fails

{% raw %}

	Article: Q149717
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MediaView Software and Title Development Kit, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to jump to a subtopic, MediaView may jump to the enclosing topic
	but will not correctly scroll the media view to the location of the subtopic.
	
	CAUSE
	=====
	
	In order to jump to a subtopic, you must acquire a virtual address (VA) for that
	topic. To get this, you might call vaMVConvertContextString() which will convert
	a context string to a VA. Then you would pass the VA to fMVSetAddress() which
	would cause the jump to occur.
	
	The problem is that context strings are not in and of themselves guaranteed to be
	allocated a new VA. Normally, when this problem occurs it is happening because
	the subtopic is getting assigned the same VA as either a preceding subtopic or
	perhaps the topic itself. The end result is that the media view gets scrolled to
	an unexpected location.
	
	RESOLUTION
	==========
	
	To ensure that a new VA is generated for each context string, you must ensure
	that the context string resides in a new paragraph and that it has some
	paragraph formatting that is distinct from the previous paragraph.
	
	Paragraph formatting includes: justification, first-line indent, spacing,
	borders, keep-with-next, and keep-together. In addition, tab stops are also
	considered part of paragraph formatting (at least for the purpose of determining
	VAs). Font changes are classified as character formatting and will not affect VA
	generation.
	
	One simple solution to ensure that a new VA is created for each subtopic is to
	insert a phantom tab stop for each new subtopic. Just be sure that the tab stop
	is different from the preceding paragraph.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In MediaView, you can include subtopics within a given topic by arbitrarily
	inserting a pound-sign (#) footnote to mark the location of the subtopic. Jumps
	to subtopics should cause a jump to the enclosing topic with the media view
	scrolled to the point where the subtopic context string was authored.
	
	REFERENCES
	==========
	
	MediaView Documentation Player.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSDKSearch kbSDKMediaView100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
