---
layout: page
title: "Q161823: HOWTO: Use Build Tags to Exclude Topics from a Help File"
permalink: kb/161/Q161823/
---

## Q161823: HOWTO: Use Build Tags to Exclude Topics from a Help File

	Article: Q161823
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbusage kbDSSTools kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	NOTE: This article assumes that you are familiar with authoring Microsoft
	Windows Help files and have created the source (.rtf) and project (.hpj)
	files needed to create a Help file.
	
	SUMMARY
	=======
	
	This article explains how to exclude topics from a Help file, such as topics
	that only apply to a specific product or a specific version of a product that
	the user does not have. With the advent of Full Text Search, it is difficult to
	hide these topics from the end user.
	
	The Help Compiler Workshop's Help Compiler has a feature that allows Help authors
	to exclude specified topics by tagging them in the source (.rtf) file. Any of
	the topics in the source (.rtf) file that are used to create the Help file can
	be tagged to indicate whether or not the topic should be compiled.
	
	If you want to place a build tag on a topic, you need to mark the topic in the
	source file with the "*" footnote. The text associated with the "*" footnote is
	called the tag. A tag can have up to 32 characters.
	
	The project file (.hpj) that is used to generate the Microsoft Windows Help file
	must be modified to let the Help Compiler know whether you want to include or
	exclude the tagged topics in the finished Help file.
	
	MORE INFORMATION
	================
	
	In the Source (.rtf) File
	-------------------------
	
	In the source .rtf file, use the "*" footnote to tag a topic. This footnote must
	be the first footnote for the topic. For instance, if your footnotes are in the
	order "*#KA$" with the "*" at the beginning of the list, then the Help Compiler
	can properly tag the topic. If the "*" appears anywhere else in the sequence,
	then the compiler displays a warning.
	
	For example, if you want to exclude several topics from your compiled Help file
	you must have a "*" footnote in each one of the topics that you want to exclude.
	Associate text to the footnote of these tagged topics to indicate that you do
	not want them compiled. This can be done by associating text such as "NoCompile"
	on the "*" footnotes. "NoCompile" becomes the tag for these topics.
	
	If you do not have any "*" footnotes on a topic, then, by default, the topic is
	compiled and becomes a topic in the finished Help file.
	
	You may also find it necessary to tag a topic to be included in the compile. The
	procedure for tagging the text is the same. You need to place a "*" footnote on
	the topic and associate a tag name with that topic. As far as the .rtf file is
	concerned, it doesn't matter whether you intend to include or exclude the tagged
	topic from the finished Help file. The .rtf file is used only to tag the topic.
	Whether the tagged topic is included in the compiled Help file or not is
	determined in the .hpj (project) file. There are several ways to do this. Please
	note that build tags are not case sensitive.
	
	In the Project (.hpj) File
	--------------------------
	
	Method 1
	--------
	
	Explicitly indicate whether to include or exclude the tagged topic with Help
	Workshop.
	
	1. On the File menu, click Open to open the .hpj file.
	
	2. Click Options.
	
	3. In the Options dialog box, click the Build Tags tab.
	
	4. In the upper ListBox, add the tags that you want to include. In the lower
	  ListBox, add the tags that you want to exclude. In the preceding example, you
	  would place "NoCompile" in the lower ListBox. Again, please note that the
	  topic is compiled by default if it is not tagged.
	
	5. Click OK after you finish adding the tags to the appropriate ListBoxes. Now
	  all of the tags that you added to the upper ListBox appear in the [INCLUDE]
	  section of the .hpj and all of the tags that you added to the lower ListBox
	  appear in the [EXCLUDE] section of the .hpj.
	
	6. Click "Save and Compile" to compile the Help file.
	
	The finished Help file contains all of the topics that were not marked with "*"
	footnote. It also contains any topics that were marked with the "*" footnote in
	the source (.rtf) file and whose tags were placed in the [INCLUDE] section of
	the project (.hpj) file.
	
	Method 2
	--------
	
	Indicate which tags to include or exclude by using a text editor and the BUILD
	command.
	
	1. Use a text editor such as Notepad to display your .hpj file.
	
	2. Add a [BUILDTAGS] section to the .hpj file. In this section, you need to list
	  all of the tags used in your .rtf. If you use "NoCompile" as a tag on a topic
	  with a "*" footnote, then you need to list "NoCompile" in the [BUILDTAGS]
	  section of the .hpj. If you use "Compile" as a tag to indicate that you want
	  to include a topic in the finished Help file then you also need to list
	  "Compile" in the [BUILDTAGS] section. For the preceding example, the .hpj
	  would look like the following:
	
	        [BUILDTAGS]
	        NoCompile
	        Compile
	
	3. After listing the build tags, you need to let the compiler know which tags
	  indicate topics to compile and which tags indicate topics to exclude. This is
	  done using the BUILD command in the [OPTIONS] section of the .hpj file. A
	  typical BUILD command might look like this:
	
	        [OPTIONS]
	        .
	        .
	        BUILD = (Compile | Other) & (~NoCompile)
	        .
	        .
	
	  The tilda "~" tells the compiler not to include the topic.
	
	  The ampersand "&" is equivalent to a logical "and."
	
	  The vertical line "|" is equivalent to a logical "or."
	
	  The above BUILD command compiles all of the topics that have either the
	  "Compile" or Other tags and do not have the "NoCompile" tag. All topics that
	  are not marked with the "*" footnote are compiled by default. Only one BUILD
	  option can be specified per project (.hpj) file.
	
	4. After modifying the .hpj file, save the text file and make sure that the file
	  has the .hpj extension.
	
	5. Open the .hpj file in Help Workshop, and then compile.
	
	If there is an [INCLUDE] or [EXCLUDE] section in your project file when you
	compile a file, Help Workshop ignores any BUILD command you may have specified
	in the [OPTIONS] section of the .hpj file. If you use Method 1, you do not need
	to have a [BUILDTAGS] section.
	
	REFERENCES
	==========
	
	Help Workshop Hcw.hlp
	
	Microsoft Windows 95 Help Authoring Kit, Microsoft Press
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbDSSTools kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
