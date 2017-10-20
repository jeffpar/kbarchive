---
layout: page
title: "Q66993: Noise Words Are Wildcards in &quot;Phrase Search&quot; in PRISM Browser"
permalink: /kb/066/Q66993/
---

## Q66993: Noise Words Are Wildcards in &quot;Phrase Search&quot; in PRISM Browser

{% raw %}

	Article: Q66993
	Product(s): Microsoft Product Support Information
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Below is a list of "noise words" that are ignored when you query in the PRISM
	Browser or KB Query Service. (KB Query Service can be run either as a
	stand-alone app or as a component of Workbench. Noise words only impact your
	query by giving more articles than you may have expected.)
	
	MORE INFORMATION
	================
	
	For multiple-word phrase searches, if you are searching for a contiguous phrase
	surrounded by double quotation marks, and any noise word from the list below
	appears anywhere within the quotation marks, then the noise words are ignored.
	The remaining words are searched in order and by proximity accounting for the
	space that is taken by the noise words. In other words, you may get a few
	additional articles because noise words act as wildcards within the contiguous
	phrases surrounded by double quotation marks.
	
	For more information see Query Quick Reference Under the Help menu in either
	PRISM Browser or KB Query Service.
	
	Below are some sample queries, followed by the actual search that is performed:
	
	Your query                  Actual search             Noise words
	-----------------------------------------------------------------------
	
	this thing under that       THING                     this, under, that
	out of memory               MEMORY                    out, of
	"Out of memory"             MEMORY                    out, of
	"Division by zero"          "DIVISION @@ ZERO"        by
	"END IF without Block IF"   "END @@@@@@@@@ BLOCK"     if, without
	"NEXT without FOR" error    NEXT & ERROR              without, for
	"String space corrupt"      "STRING SPACE CORRUPT"    [none]
	
	The number of @ symbols shown above tells you how many character positions (not
	counting spaces) act as wildcards, which match any word in that position. (@ is
	not a query operator.)
	
	Why Use Noise Words?
	--------------------
	
	The query engine uses index files and records the position of every non- noise
	word in every article. Index files are automatically updated on a regular basis.
	Ignoring (not indexing) noise words significantly reduces the size and update
	time for index files.
	
	In addition, the words in the list of noise words are very common and some words
	aren't always significant in refining or reducing the number of articles
	returned.
	
	Noise Word List
	---------------
	
	after
	also
	an
	and
	as
	at
	be
	because
	before
	between
	but
	by
	for
	from
	however
	if
	in
	into
	of
	or
	other
	out
	since
	such
	than
	that
	the
	there
	these
	this
	those
	to
	under
	upon
	when
	where
	whether
	which
	with
	within
	without
	
	Advanced Phrase Searching
	-------------------------
	
	Note that you can use the logical AND with proximity and order, n<, where the
	phrase on either side of n< must appear within n characters of the other (not
	counting spaces), in the order given in your query. Use nX if order does not
	matter. Only two phrases can be connected per query. For example:
	
	  division 10< zero       Searches for "DIVISION" followed by "ZERO"
	                          within 10 characters (not counting spaces).
	
	  END 20< block           Searches for "END" followed by "BLOCK"
	                          within 20 characters (not counting spaces).
	
	  "Division by zero" 1000X error    Searches for "DIVISION @@ ZERO"
	                                    with ERROR anywhere within
	                                    1000 characters.
	
	Additional query words: browse browser.exe noisewords kbquery
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
